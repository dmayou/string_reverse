'use strict';


let initialStr = prompt('Enter string to reverse:');

// console.log(checkString(initialStr));
// console.log(toLowerCase(initialStr[0]));

console.log( reverseString( initialStr ));

function reverseString(str) {
  if (str.length === 0 || str.isNull) {
    return null;
  }
  // break string into array of char
  let char = [];
  let i = str.length - 1;
  let j = 0;

  while (i >= 0) {
    if (isLetter(str[i--])) {
      char[j++] = toLowerCase(str[i+1]);
    }
  }
  return charArrToStr(char);
}

function toLowerCase(ch) { // char array
  if (ch >= 'A' && ch <= 'Z') {
    return ( String.fromCharCode( ch.charCodeAt(0) + 32 ));
  } else {
    return (ch);
  }
}

function isLetter(ch) {
  return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'));
}

function charArrToStr(ch) {
  let str = '';
  for (let char of ch) {
    str += char;
  }
  return str;
}
