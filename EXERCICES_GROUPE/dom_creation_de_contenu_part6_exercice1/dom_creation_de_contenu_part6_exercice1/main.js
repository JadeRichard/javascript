
//1 

let div_1 = document.getElementById("content")

let h2_1 = document.createElement("h2")

let h2_text = document.createTextNode("Part 6 - Exercice 1")

h2_1.appendChild(h2_text)

div_1.appendChild(h2_1)

//2

let p_1 = document.createElement("p")

let p_text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore mollitia, sit repellat, debitis neque autem veritatis maxime fugit magnam at cumque accusantium, est totam. Culpa ad eum sint natus?")

p_1.appendChild(p_text)

div_1.appendChild(p_1)

//3 

let h1_1 = document.createElement("h1")

let h1_text = document.createTextNode("Le DOM - Création de HTML")

h1_1.appendChild(h1_text)

div_1.insertBefore(h1_1, h2_1)





let secondary = document.querySelector('#secondaire')

secondary.innerHTML = content.innerHTML
let h22 = document.querySelector('#secondaire > h2')
h22.textContent = "Part 6 - Exercice 2"
let dernier = document.createElement("div")
dernier.id = "matiere"
let body = document.querySelector('body')
body.appendChild(dernier)
let ul = document.createElement('ul')
dernier.appendChild(ul)
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
li1.textContent = "insertbefore"
li2.textContent = "insertafter"
li3.textContent = "insertadjacent"
