import {removeExtraSpaces, sepLines, trimEquals } from './helpers.js';


// parse line
export function parseLine(line) {
  line = removeExtraSpaces(line);
  line = trimEquals(line);

  const [name, ...args] = line.split(' ');
  return { name, args };
}

// extract string between double quotes
export function extractString(str) {
  const regex = /"(.*?)"/;
  const match = regex.exec(str);
  return match[1];
}