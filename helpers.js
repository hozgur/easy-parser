
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
