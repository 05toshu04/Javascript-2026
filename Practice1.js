let obj={
    toshu:100,
    akki:100 ,
    yash:100
}
let length=Object.keys(obj).length;


for(let i=0;i<length;i++){
    console.log(Object.keys(obj)[i]+"="+ Object.values(obj)[i])
}