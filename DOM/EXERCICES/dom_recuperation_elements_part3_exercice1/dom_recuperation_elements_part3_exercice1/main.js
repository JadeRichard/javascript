//1
let ex_1 = document.querySelectorAll("h2.ml-5")[0]
console.log(ex_1.innerText)

//2
let ex_2 = ex_1.innerText = "Exercice 1"
console.log(ex_2);

//3
let ex_3 = document.querySelector("p").innerText = "Exercice 1"
console.log(ex_3)

//4
let ex_4 = document.querySelector("section").id
console.log(ex_4)

//5
let ex_5 = document.querySelector("h1").classList
console.log(ex_5);

let ex_5_2 = document.querySelector("h1").className
console.log(ex_5_2);

//6
let ex_6 = document.querySelectorAll("h1")

ex_6.forEach(element => {
    console.log(element.className);
});

//7
let ex_7 = document.querySelector("input").attributes
console.log(ex_7)

//8
let ex_8 = document.querySelector("input").getAttribute("type")
console.log(ex_8)

//9
let ex_9 = document.querySelector("input#inputPassword3").setAttribute("type", "password")
console.log(document.querySelector("input#inputPassword3").getAttribute("type"))

//10
let ex_10 = document.querySelector("input").setAttribute("type", "color")
console.log(document.querySelector("input").getAttribute("type"))
