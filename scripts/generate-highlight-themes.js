#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const highlightDir = path.join(projectRoot, 'node_modules', 'highlight.js', 'styles');
const outputDir = path.join(projectRoot, 'src', 'themes', 'highlight');

const requiredCodeStyles = ['Keyword', 'Comment', 'Plaintext', 'Punctuation', 'String', 'Literal', 'Type'];
const optionalCodeStyles = ['Tag', 'AttributeName', 'AttributeValue', 'Decimal', 'NoCode'];
const reservedExports = new Set([
  'Default',
  'DefaultGray',
  'Desert',
  'Sunburst',
  'A11YDark',
  'A11YLight',
  'AtelierCaveLight',
  'AtelierCaveDark',
  'BlueHintGray',
  'CSharpDark',
  'ChatGPTDark',
  'ThonnyDefaultLight',
]);

const displayOverrides = new Map([
  ['xcode', 'XCode'],
]);

function capitalize(word) {
  if (!word) {
    return word;
  }
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function normalizeDisplayName(name, { isBase16 } = {}) {
  if (!name) {
    return name;
  }

  if (isBase16) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .map((segment) => capitalize(segment))
      .join(' ');
  }

  const segments = name.split(/[-_\s]+/).filter(Boolean);
  if (!segments.length) {
    return capitalize(name);
  }
  return segments.map((segment) => capitalize(segment)).join('');
}

const colorNameMap = {
  black: '000000',
  silver: 'c0c0c0',
  gray: '808080',
  white: 'ffffff',
  maroon: '800000',
  red: 'ff0000',
  purple: '800080',
  fuchsia: 'ff00ff',
  green: '008000',
  lime: '00ff00',
  olive: '808000',
  yellow: 'ffff00',
  navy: '000080',
  blue: '0000ff',
  teal: '008080',
  aqua: '00ffff',
  orange: 'ffa500',
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  brown: 'a52a2a',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  crimson: 'dc143c',
  gold: 'ffd700',
  indigo: '4b0082',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  magenta: 'ff00ff',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  salmon: 'fa8072',
  sienna: 'a0522d',
  tan: 'd2b48c',
  tomato: 'ff6347',
};

const propertyMappings = [
  { property: 'Comment', patterns: ['hljs-comment', 'hljs-quote'] },
  {
    property: 'Keyword',
    patterns: [
      'hljs-keyword',
      'hljs-doctag',
      'hljs-template-tag',
      'hljs-meta-keyword',
      'hljs-keyword.hljs-atrule',
      'hljs-keyword.hljs-built_in',
    ],
  },
  {
    property: 'String',
    patterns: ['hljs-string', 'hljs-meta .hljs-string', 'hljs-symbol', 'hljs-addition', 'hljs-code'],
  },
  {
    property: 'Literal',
    patterns: [
      'hljs-literal',
      'hljs-bullet',
      'hljs-link',
      'hljs-variable',
      'hljs-template-variable',
      'hljs-regexp',
      'hljs-meta',
    ],
  },
  {
    property: 'Type',
    patterns: [
      'hljs-type',
      'hljs-title',
      'hljs-built_in',
      'hljs-class',
      'hljs-title.function_',
      'hljs-title.class_',
      'hljs-title.class_.inherited__',
      'hljs-section',
    ],
  },
  { property: 'Tag', patterns: ['hljs-tag', 'hljs-name', 'hljs-selector-tag'] },
  { property: 'AttributeName', patterns: ['hljs-attr', 'hljs-attribute', 'hljs-selector-attr'] },
  { property: 'AttributeValue', patterns: ['hljs-attribute-value'] },
  { property: 'Punctuation', patterns: ['hljs-punctuation', 'hljs-operator'] },
  { property: 'Decimal', patterns: ['hljs-number'] },
  { property: 'NoCode', patterns: ['hljs-deletion', 'hljs-subst'] },
];

function collectCssFiles(dir, relative = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      files.push(...collectCssFiles(path.join(dir, entry.name), path.join(relative, entry.name)));
    } else if (entry.isFile() && entry.name.endsWith('.css') && !entry.name.endsWith('.min.css')) {
      files.push({
        absolute: path.join(dir, entry.name),
        relativeDir: relative,
        name: entry.name.slice(0, -4),
      });
    }
  }
  return files;
}

function parseColor(value) {
  if (!value) {
    return undefined;
  }
  const cleaned = value.replace(/!important/g, '').trim().toLowerCase();
  const hexMatch = cleaned.match(/#([0-9a-f]{3,8})/i);
  if (hexMatch) {
    let hex = hexMatch[1].toLowerCase();
    if (hex.length === 4) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    } else if (hex.length === 8) {
      hex = hex.slice(0, 6);
    }
    return hex;
  }
  const rgbMatch = cleaned.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const [r, g, b] = rgbMatch[1]
      .split(',')
      .slice(0, 3)
      .map((component) => Math.max(0, Math.min(255, parseInt(component.trim(), 10) || 0)));
    const toHex = (component) => component.toString(16).padStart(2, '0');
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  if (colorNameMap[cleaned]) {
    return colorNameMap[cleaned];
  }
  return undefined;
}

function parseDeclarations(block) {
  const declarations = {};
  const cleanedBlock = block.replace(/\/\*[^]*?\*\//g, '');
  const parts = cleanedBlock.split(';');
  for (const part of parts) {
    if (!part.trim()) {
      continue;
    }
    const colon = part.indexOf(':');
    if (colon === -1) {
      continue;
    }
    const property = part.slice(0, colon).trim().toLowerCase();
    let rawValue = part.slice(colon + 1).trim();
    if (!rawValue) {
      continue;
    }
    if (property === 'color') {
      const color = parseColor(rawValue);
      if (color) {
        declarations.Color = color;
      }
    } else if (property === 'background' || property === 'background-color') {
      const color = parseColor(rawValue);
      if (color) {
        declarations.BackgroundColor = color;
      } else if (property === 'background') {
        declarations.Background = rawValue.replace(/!important/g, '').trim();
      }
    } else if (property === 'font-weight') {
      declarations.FontWeight = rawValue.replace(/!important/g, '').trim();
    } else if (property === 'font-style') {
      declarations.FontStyle = rawValue.replace(/!important/g, '').trim();
    }
  }
  return declarations;
}

function applyStyle(target, source) {
  if (!source) {
    return;
  }
  const allowed = ['Color', 'BackgroundColor', 'FontWeight', 'FontStyle', 'Background'];
  for (const key of allowed) {
    if (source[key]) {
      target[key] = source[key];
    }
  }
}

function sanitizeForDisplay(value) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s+\//g, '/')
    .replace(/\s+\)/g, ')')
    .trim();
}

function toExportName(displayName, prefix = '') {
  const segments = displayName
    .replace(/[^0-9a-zA-Z]+/g, ' ')
    .split(' ')
    .filter(Boolean);
  if (!segments.length) {
    return `${prefix}Theme`;
  }
  const words = segments.map((segment) => {
    const first = segment.charAt(0).toUpperCase();
    const rest = segment.slice(1);
    return `${first}${rest}`;
  });
  let result = `${prefix}${words.join('')}`;
  if (/^[0-9]/.test(result)) {
    result = `${prefix || 'Theme'}${result}`;
  }
  return result;
}

function ensureStyle(store, key) {
  if (!store[key]) {
    store[key] = {};
  }
  return store[key];
}

function pruneEmpty(optionalStore, key) {
  if (optionalStore[key] && !Object.keys(optionalStore[key]).length) {
    delete optionalStore[key];
  }
}

function parseTheme(css) {
  const blockRegex = /([^{}]+)\{([^{}]+)\}/g;
  const codeStyles = {};
  const optionalStyles = {};
  let match;
  let plainColor;
  const backgroundStyle = {};
  while ((match = blockRegex.exec(css))) {
    const selectorsRaw = match[1];
    const declarationsRaw = match[2];
    const declarations = parseDeclarations(declarationsRaw);
    if (!Object.keys(declarations).length) {
      continue;
    }
    const selectors = selectorsRaw
      .split(',')
      .map((selector) => selector.replace(/\/\*[^]*?\*\//g, '').trim())
      .filter(Boolean);
    const baseSelectorRegex = /(^|\s)\.hljs(\s|$)/;
    const hasBaseSelector = selectors.some((selector) => baseSelectorRegex.test(selector));
    if (hasBaseSelector) {
      if (declarations.Color) {
        plainColor = declarations.Color;
        applyStyle(ensureStyle(codeStyles, 'Plaintext'), { Color: declarations.Color });
      }
      if (declarations.BackgroundColor) {
        backgroundStyle.BackgroundColor = declarations.BackgroundColor;
      } else if (declarations.Background) {
        backgroundStyle.Background = declarations.Background;
      }
    }
    for (const mapping of propertyMappings) {
      if (
        selectors.some((selector) =>
          mapping.patterns.some((pattern) => selector.includes(pattern)),
        )
      ) {
        const store = requiredCodeStyles.includes(mapping.property)
          ? ensureStyle(codeStyles, mapping.property)
          : ensureStyle(optionalStyles, mapping.property);
        applyStyle(store, declarations);
      }
    }
  }
  const fallbackColor = plainColor || '000000';
  for (const property of requiredCodeStyles) {
    const style = ensureStyle(codeStyles, property);
    if (!style.Color) {
      style.Color = fallbackColor;
    }
  }
  if (optionalStyles.Tag && !optionalStyles.Tag.Color) {
    optionalStyles.Tag.Color = codeStyles.Keyword.Color;
  }
  if (optionalStyles.AttributeName && !optionalStyles.AttributeName.Color) {
    optionalStyles.AttributeName.Color = codeStyles.Keyword.Color;
  }
  if (optionalStyles.AttributeValue && !optionalStyles.AttributeValue.Color) {
    optionalStyles.AttributeValue.Color = codeStyles.String.Color;
  }
  if (optionalStyles.Decimal && !optionalStyles.Decimal.Color) {
    optionalStyles.Decimal.Color = codeStyles.Literal.Color;
  }
  for (const optional of optionalCodeStyles) {
    pruneEmpty(optionalStyles, optional);
  }
  const lineNumberStyle = { Color: fallbackColor };
  if (backgroundStyle.BackgroundColor) {
    lineNumberStyle.BackgroundColor = backgroundStyle.BackgroundColor;
  } else {
    lineNumberStyle.Background = 'none';
  }
  return {
    codeStyles,
    optionalStyles,
    backgroundStyle,
    lineNumberStyle,
    fallbackColor,
  };
}

function extractDisplayName(css) {
  const themeMatch = css.match(/Theme:\s*([^\n\r]+)/);
  if (themeMatch) {
    return sanitizeForDisplay(themeMatch[1]);
  }
  return undefined;
}

function readCssTheme(fileInfo) {
  const css = fs.readFileSync(fileInfo.absolute, 'utf8');
  const parsed = parseTheme(css);
  let displayName = extractDisplayName(css);
  const isBase16 = fileInfo.relativeDir.includes('base16');
  if (!displayName) {
    displayName = fileInfo.name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  if (isBase16 && !/^base16/i.test(displayName)) {
    displayName = `Base16 ${displayName}`;
  }
  const lowerDisplay = displayName.toLowerCase().replace(/\s+/g, '');
  const override = displayOverrides.get(lowerDisplay);
  if (override) {
    displayName = override;
  }
  let exportName = toExportName(displayName);
  let adjustedDisplayName = normalizeDisplayName(displayName, { isBase16 });
  if (reservedExports.has(exportName)) {
    exportName = `${exportName}Highlight`;
    adjustedDisplayName = `${normalizeDisplayName(displayName, { isBase16 })} (Highlight.js)`;
  }
  return {
    displayName: adjustedDisplayName,
    exportName,
    parsed,
  };
}

function buildThemeContent(theme) {
  const { displayName, exportName, parsed } = theme;
  const { codeStyles, optionalStyles, backgroundStyle, lineNumberStyle } = parsed;
  const allCodeStyles = { ...codeStyles, ...optionalStyles };
  const order = [
    'Keyword',
    'Comment',
    'Plaintext',
    'Punctuation',
    'String',
    'Literal',
    'Type',
    'Tag',
    'AttributeName',
    'AttributeValue',
    'Decimal',
    'NoCode',
  ];
  const codeStylesEntries = order
    .filter((key) => allCodeStyles[key])
    .map((key) => `    ${key}: ${formatStyleObject(allCodeStyles[key], 2)}`)
    .join(',\n');
  const backgroundStyleString = formatStyleObject(backgroundStyle, 1);
  const lineNumberStyleString = formatStyleObject(lineNumberStyle, 1);
  return `import { ITheme } from '../ITheme';\n\nexport const ${exportName}: ITheme = {\n  DisplayName: '${displayName.replace(/'/g, "\\'")}',\n  CodeStyles: {\n${codeStylesEntries}\n  },\n  BackgroundStyle: ${backgroundStyleString},\n  LineNumberStyle: ${lineNumberStyleString},\n};\n`;
}

function formatStyleObject(style, indentLevel = 0) {
  const keys = Object.keys(style);
  if (!keys.length) {
    return '{}';
  }
  const indent = ' '.repeat(indentLevel * 2);
  const innerIndent = ' '.repeat((indentLevel + 1) * 2);
  const props = keys
    .map((key) => `${innerIndent}${key}: '${style[key]}',`)
    .join('\n');
  return `{\n${props}\n${indent}}`;
}

function generate() {
  if (!fs.existsSync(highlightDir)) {
    throw new Error('highlight.js styles directory not found. Run npm install highlight.js first.');
  }
  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.mkdirSync(outputDir, { recursive: true });
  const cssFiles = collectCssFiles(highlightDir);
  const themes = [];
  const usedExports = new Set();
  for (const file of cssFiles) {
    const theme = readCssTheme(file);
    let uniqueExport = theme.exportName;
    let counter = 2;
    while (usedExports.has(uniqueExport)) {
      uniqueExport = `${theme.exportName}${counter}`;
      counter += 1;
    }
    usedExports.add(uniqueExport);
    theme.uniqueExportName = uniqueExport;
    themes.push(theme);
    const content = buildThemeContent({ ...theme, exportName: uniqueExport });
    const filePath = path.join(outputDir, `${uniqueExport}.ts`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
  themes.sort((a, b) => (a.uniqueExportName > b.uniqueExportName ? 1 : -1));
  const indexLines = ["import { ITheme } from '../ITheme';", ''];
  for (const theme of themes) {
    indexLines.push(`import { ${theme.uniqueExportName} } from './${theme.uniqueExportName}';`);
  }
  indexLines.push('', 'export const HighlightThemes: { [key: string]: ITheme } = {');
  for (const theme of themes) {
    indexLines.push(`  ${theme.uniqueExportName},`);
  }
  indexLines.push('};', '');
  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexLines.join('\n'), 'utf8');
  console.log(`Generated ${themes.length} highlight.js themes.`);
}

generate();
