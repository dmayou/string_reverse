'use strict';


let initialStr = prompt('Enter string to reverse:');

//console.log(checkString(initialStr));
console.log(toLowerCase(initialStr[0]));

function checkString(str) {
  if (str.length === 0 || str.isNull) {
    return null;
  }
  // break string into array of char
  let char = [];
  let i = str.length - 1;
  let j = 0;

  while (i >= 0) {
    if (isLetter(str[i--])) {
      char[j++] = str[i+1];
    }
  }
  return char;
}

function toLowerCase(ch) { // char array
  if (ch >= 'A' && ch <= 'Z') {
    return (String.fromCharCode(ch.charCodeAt(0) + 32));
  } else {
    return;
  }

}

function isLetter(ch) {
  return (ch >= 'a' && ch <= 'z');
}
