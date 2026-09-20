let guess=5;
while(true){
  let number=prompt("guess the number from 1 to 10 ");
  number=Number.parseInt(number);

  if(number==guess){
    console.log("congratulatios you guess the right number");
    break;
  }
  else{
    console.log("try again")
    
  }
}