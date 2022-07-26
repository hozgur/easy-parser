import { sepLines, removeExtraSpaces, trimEquals,findDoubleQuotes,
  replaceSpaces, findCodeBlocks, tokenizeStr,getExpression } from "./helpers.js";


// parse line
export function tokenizeLine(line) {
  const doubleQuotes = findDoubleQuotes(line);
  const codeBlocks = findCodeBlocks(line);
  const line2 = replaceSpaces(line, doubleQuotes);
  const line3 = replaceSpaces(line2, codeBlocks);
  const line4 = removeExtraSpaces(line3);
  const tokens = tokenizeStr(line4);
  return tokens;
}

export function tokenstoElement(tokens) {

  let classes = [];
  let content = [];
  let properties = [];
  let id = '';
  let type = tokens[0];

  for (let i = 1; i < tokens.length; i++) {
    let token = tokens[i];
    if(token.startsWith('"'))
      token = token.substring(1, token.length - 1);
    if (token.startsWith('.')) {
      classes.push(token.substring(1));
      continue;
    }
    if (token.startsWith('#')) {
      id = token.substring(1);
      continue;
    }
    const exp = getExpression(token);
    if(exp.length == 2) {
      if(exp[1].startsWith('"'))
        exp[1] = exp[1].substring(1, exp[1].length - 1);
      if(exp[0] === 'class')
        classes.push(exp[1]);
      else 
        properties.push({key:exp[0],value:exp[1]});
      continue;
    }
    content.push(token);
  }
  return {
    type,
    id,
    classes,
    content,
    properties
  };
}