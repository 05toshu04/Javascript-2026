let btn=document.querySelector("button");

btn.addEventListener("click", function() {

let input=document.querySelector("input");

let ul=document.querySelector("ul");


let li=document.createElement("li");  
ul.appendChild(li);
li.innerText=input.value; 
input.value=""; 

let button2=document.createElement("button");
li.appendChild(button2);
button2.innerText="Delete";


button2.addEventListener("click", function() {
    li.remove();
})

});
