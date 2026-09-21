let arr=[23,34,45]
console.log(arr);                                 //print array

for(let i=0;i<arr.length;i++){
    console.log(`index [${i}] = ${arr[i]}`)      //print array using for loop to print index with it
}  

for(let value of arr){
    console.log(value)                           //print array without indexing
}

