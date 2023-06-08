let box= document.getElementById("col")
console.log(box);

let btn1= document.getElementById("a")
console.log(btn1);
let btn2= document.getElementById("b")
console.log(btn2);
let btn3= document.getElementById("c")
console.log(btn3);

btn1.addEventListener("click", myFunction);
function myFunction() {
  box.style.backgroundColor = "orange";
}

btn2.addEventListener("click", myFunction1);
function myFunction1() {
  box.style.backgroundColor = "green";
}

btn3.addEventListener("click", myFunction2);
function myFunction2() {
  box.style.backgroundColor = "blue";
}

const xhr = new XMLHttpRequest();
let btn4= document.getElementById("d")
btn4.addEventListener("click", myFunction3);
function myFunction3() {    
    box.style.backgroundColor = "red";
    xhr.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=553b774a ");
    xhr.onloadend = postAjaxFunction;
    xhr.send();
   
};

let postAjaxFunction = function(){
    if (xhr.status===200){
        let responce = JSON.parse(xhr.respecText);
        let contributor = responce.Games.contributors[3];
        box.innerHTML = contributor;
    }
    else{
        box.innerHTML = "Something went wrong";
    }
}
