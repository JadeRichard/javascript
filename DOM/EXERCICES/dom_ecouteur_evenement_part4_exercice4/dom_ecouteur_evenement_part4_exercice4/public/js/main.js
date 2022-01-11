//1 

/* let input = document.getElementsByTagName("input")[0]

function bluebg() {
    input.setAttribute("style", "background-color: blue;")
}

input.addEventListener("focus", bluebg); */

//2 

/* let input_2 = document.getElementsByTagName("input")[1]

function bluebg() {
    input_2.setAttribute("style", "background-color: blue;")
}

input_2.addEventListener("focus", bluebg);

function nobg() {
    input_2.setAttribute("style", "background-color: none;")
}

input_2.addEventListener("focusout", nobg); */

//3

/* let para_1 = document.getElementsByTagName("p")[0]
let para_2 = document.getElementsByTagName("p")[1]
let para_3 = document.getElementsByTagName("p")[2]
let button = document.getElementsByTagName("button")[0]

function replaceText() {
    para_1.innerText = para_2.innerText
    para_3.innerText = para_2.innerText
}

button.addEventListener("click", replaceText); */

//4 //////////////////////////////////////////////////////////////////////////////////

//Exercice4
let btnRename = document.getElementsByClassName("btn")[1];
let nicolas = document.querySelector("#exo4");

btnRename.addEventListener("click",()=>{
    let recup = document.querySelectorAll("input")[2];
    nicolas.innerText = recup.value;
})
//5 

/* let img = document.getElementsByTagName("img")[0]
let button = document.getElementsByTagName("button")[2]

function replaceSrc() {
   img.setAttribute("src", "./src/image/tartine.png")
}

button.addEventListener("click", replaceSrc);  */

//6

let tartine1 = document.getElementsByClassName("img-responsive")[1]
let tartine2 = document.getElementsByClassName('img-responsive')[2]
let stock = tartine1

tartine1.addEventListener('click', () =>{
    console.log(stock)
})
tartine2.addEventListener('click', () =>{
    tartine2.src = stock.src
})

console.log(tartine1,tartine2)

//4.7

let text1 = document.getElementsByClassName('btn')[3].previousElementSibling


let text2 = document.getElementsByClassName('btn')[3].nextElementSibling

let inversing = document.getElementsByClassName('btn')[3]

inversing.addEventListener("click", () => {
    let tempVar = text1.textContent
    text1.textContent = text2.textContent
    text2.textContent = tempVar
})