let exo_1 = document.querySelector(".exo1")
let exo_2 = document.querySelector(".exo2")
let exo_3 = document.querySelector(".exo3")
let exo_4 = document.querySelector(".exo4")
let exo_5 = document.querySelector(".exo5")
let exo_6 = document.querySelector(".exo6")

let btn_1 = document.querySelector(".exercice_1")
let btn_2 = document.querySelector(".exercice_2")
let btn_3 = document.querySelector(".exercice_3")
let btn_4 = document.querySelector(".exercice_4")
let btn_5 = document.querySelector(".exercice_5")
let btn_6 = document.querySelector(".exercice_6")

/* HIDE AND SHOW */

let h_s_1 = () =>{
    exo_1.style.display = "inherit";
    exo_2.style.display = "none";
    exo_3.style.display = "none";
    exo_4.style.display = "none";
    exo_5.style.display = "none";
    exo_6.style.display = "none";
}

let h_s_2 = () =>{
    exo_1.style.display = "none";
    exo_2.style.display = "inherit";
    exo_3.style.display = "none";
    exo_4.style.display = "none";
    exo_5.style.display = "none";
    exo_6.style.display = "none";
}

let h_s_3 = () =>{
    exo_1.style.display = "none";
    exo_2.style.display = "none";
    exo_3.style.display = "inherit";
    exo_4.style.display = "none";
    exo_5.style.display = "none";
    exo_6.style.display = "none";
}

let h_s_4 = () =>{
    exo_1.style.display = "none";
    exo_2.style.display = "none";
    exo_3.style.display = "none";
    exo_4.style.display = "inherit";
    exo_5.style.display = "none";
    exo_6.style.display = "none";
}

let h_s_5 = () =>{
    exo_1.style.display = "none";
    exo_2.style.display = "none";
    exo_3.style.display = "none";
    exo_4.style.display = "none";
    exo_5.style.display = "inherit";
    exo_6.style.display = "none";
}

let h_s_6 = () =>{
    exo_1.style.display = "none";
    exo_2.style.display = "none";
    exo_3.style.display = "none";
    exo_4.style.display = "none";
    exo_5.style.display = "none";
    exo_6.style.display = "inherit";
}

btn_1.addEventListener("click", h_s_1)
btn_2.addEventListener("click", h_s_2)
btn_3.addEventListener("click", h_s_3)
btn_4.addEventListener("click", h_s_4)
btn_5.addEventListener("click", h_s_5)
btn_6.addEventListener("click", h_s_6)


// ---------- EXO 1

let h2 = document.querySelectorAll("h2")[0]

h2.innerText = "Le titre modifié"
h2.style.color = "#EFBE37"
h2.className = "bg-danger"

