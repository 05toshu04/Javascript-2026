let obj={
    name:"toshu",
    roll:56
}

//string -> array
let str="toshu";
console.log(Array.from(str));

// object -> array
let a=Array.from(Object.keys(obj))
console.log(a)

//number -> aray
let num=23456;
console.log(Array.from(String(num),Number))

//2
console.log (Array.from(new Set([1, 2, 2, 3,3,4])))

//3
console.log(Array.from({ length: 5 }, (_, i) => i))

