const body = document.getElementById("body");

const theme1 = document.querySelector('#choice1');
const theme2 = document.querySelector('#choice2');
const theme3 = document.querySelector('#choice3');

theme1.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme1');
});

theme2.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme2');
});

theme3.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme3');
});