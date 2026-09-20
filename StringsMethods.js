let str="   hello javascript";
let b="lang"
console.log(str);
console.log(`The length of a string is ${str.length}`)
console.log(`String in uppercase : ${str.toUpperCase()}`)
console.log(`String in lowercase : ${str.toLowerCase()}`)
console.log(`Charcter at the index 0 is ${str.charAt(0)}`)
console.log(`Charcter code at index 0 is ${str.charCodeAt(0)}`)
console.log(`Character at an index 1 is ${str.at(1)}`)
console.log(`is the string contains script : ${str.includes("script")}`)
console.log(`is the string start with hello : ${str.startsWith("hello")}`)
console.log(`The index with the java text occurs is : ${str.indexOf('java')}`)
console.log(`The string after replacing javascript with java : ${str.replace("javascript","java")}`)
console.log(str.slice(10,16));
console.log(`concat string 1st and 2nd : ${str.concat(" ",b)}`)
console.log(`removes whitespaces :${str.trim()}`)








