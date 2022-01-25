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

//4

let div_2 = document.getElementById("secondaire")

div_2.innerHTML = div_1.innerHTML

let h2_2 = document.getElementsByTagName("h2")[1]

h2_2.innerText = "Part 6 - Exercice 2"

//5

let div_3 = document.createElement("div")

let ol = document.createElement("ol")

let li_1 = document.createElement("li")
let li_2 = document.createElement("li")
let li_3 = document.createElement("li")

let li1_text = document.createTextNode("createElement")
let li2_text = document.createTextNode("createTextNode")
let li3_text = document.createTextNode("appendChild")

li_1.appendChild(li1_text)
li_2.appendChild(li2_text)
li_3.appendChild(li3_text)

ol.appendChild(li_1)
ol.appendChild(li_2)
ol.appendChild(li_3)

document.body.appendChild(div_3)

let div_att = document.getElementsByTagName("div")[2]

div_att.setAttribute("id", "matiere")

div_3.appendChild(ol)
