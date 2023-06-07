let box= document.getElementById("col")
console.log(a);

let btn1= document.getElementById("a")
console.log(btn1);
let btn2= document.getElementById("b")
console.log(btn2);
let btn3= document.getElementById("c")
console.log(btn3);
let btn4= document.getElementById("d")
console.log(btn4);

btn1.onclick = function() {
    box.style.backgroundColor = "red";
    
}
btn2.onclick = function() {
    box.style.backgroundColor = "green";
    
}

btn3.onclick = function() {
    box.style.backgroundColor = "blue";
}
btn4.onclick = function() {
    box.style.backgroundColor = "orange";
}

let taxt = document.getElementById("had")
console.log(taxt)
let t = document.getElementById("no")
t.onclick = function() {
    taxt.style.color = "Blue";
    taxt.innerHTML="I am Aayushi Sharma from  M.P Now I am living in Banglore and here I am learning Web Devlopment"

}
