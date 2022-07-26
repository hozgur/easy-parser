
export function sepLines(str) {
  return str.split('\n').filter(line => line.length > 0);
}

export function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ');
}

// remove spaces around the equal sign
export function trimEquals(str) {
    return str.replace(/\s*=\s*/g,'=');
}

// find double quote positions
export function findDoubleQuotes(line) {
  const doubleQuotes = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] === '"') {
      doubleQuotes.push(i);
    }
    i++;
  }
  return doubleQuotes;
}

export function tokenizeStr(line) {
  const tokens = line.split(' ');
  return tokens.map(token => token.trim().replace(/\x1F/g, ' '));
}

export function findCodeBlocks(line) {
  const codeBlocks = [];
  let i = 0;
  while (i < line.length) {
    const begin = line.indexOf('{', i);
    if (begin === -1)
      break;
    const end = line.indexOf('}', begin);
    if (end === -1)
      break;
    codeBlocks.push(begin);
    codeBlocks.push(end);
    i = end + 1;
  }
  return codeBlocks;
}

// check is even
export function isEven(num) {
  return num % 2 === 0;
}

export function replaceSpaces(line, pairs) {
  let i = 0;
  let newLine = "";
  if(isEven(pairs.length) === false)
    pairs.push(line.length);
  newLine = line.substring(0,pairs[i]);
  while (i < pairs.length) {
    const substr = line.substring(pairs[i++], pairs[i]+1);
    newLine += substr.replace(/\s/g, '\x1F'); 
    newLine += line.substring(pairs[i++]+1, pairs[i]);
  }
  return newLine;
}

export function getExpression(str) {
  let result = [];
  let keyvalue = str.split('=');
  if(keyvalue.length === 2) {
    result[0] = keyvalue[0].trim();
    result[1] = keyvalue[1].trim();
  }
  return result;
}