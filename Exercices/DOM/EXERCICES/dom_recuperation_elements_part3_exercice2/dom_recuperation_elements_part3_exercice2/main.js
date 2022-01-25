//1
document.querySelector("h1").innerText = "Les attributs class et id"

//2
document.querySelector("h2").innerText = "Exercice 2 partie A"

//3 
document.querySelectorAll("h2")[1].innerText = "Exercice 2 partie B"

//4
document.querySelector("p").innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"

//5
document.querySelectorAll("p")[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

//6
document.querySelector("h1").setAttribute("id", "bigTitle")

//7 
document.querySelector("div").setAttribute("class", "container")

//8
let ex_8 = document.querySelectorAll("h2")

ex_8.forEach(element => {
    element.setAttribute("class", "title")
})

//9
let ex_9 = document.querySelectorAll("p")

ex_9.forEach(element => {
    element.setAttribute("class", "text")
})

//10 
document.querySelector("section").setAttribute("class", "margin-bottom border-black padding")

//11
document.querySelectorAll("section")[1].setAttribute("class", "margin-top border-black padding")

//12
document.querySelector("section>div").setAttribute("style", "background-color: blue; border: 2px solid red; height: 20px; width: 20px;")












































/* //1
let ex_1 = document.querySelector("h1").innerText = "Les attributs class et id"

//2
let ex_2 = document.querySelector("h2").innerText = "Exercice 2 partie A"

//3
let ex_3 = document.querySelectorAll("h2")[1].innerText = "Exercice 2 partie B"


//4
let ex_4 = document.querySelector("p").innerText = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"

//5
let ex_5 = document.querySelectorAll("p")[1].innerText = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

//6
let ex_6 = document.querySelector("h1").setAttribute("id", "bigTitle")

//7
let ex_7 = document.querySelector("div").setAttribute("class", "container")

//8
let ex_8 = document.querySelectorAll("h2")

ex_8.forEach(element => {
    element.setAttribute("class", "title")
});

//9
let ex_9 = document.querySelectorAll("p")

ex_9.forEach(element => {
    element.setAttribute("class", "text")
});


//10
let ex_10 = document.querySelector("section").setAttribute("class", "margin-bottom border-black padding")

//11
let ex_11 = document.querySelectorAll("section")[1].setAttribute("class", "margin-top border-black padding")

//12
let ex_12 = document.querySelector("section>div").setAttribute("style", "background-color: blue; border: 2px solid red; height:20px; width: 20px") */