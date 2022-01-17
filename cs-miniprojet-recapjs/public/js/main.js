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

// ---------- EXO 3

let inconnu = document.querySelector("span")
let input_name = document.querySelector(".input_name")
let btn_name = document.querySelector(".go")

btn_name.addEventListener("click", () =>{
    inconnu.innerText = input_name.value
    input_name.value = ""
})

// ---------- EXO 4

let blue_1 = document.querySelector(".blue_1")
let blue_2 = document.querySelector(".blue_2")
let red = document.querySelector(".red")

let btn_change = document.querySelector(".change")

let p_counter = document.querySelector(".p_counter")

let i = 0;

btn_change.addEventListener("click", () =>{
    i++
    p_counter.innerText = i
    if ( i%2 != 0){
        blue_2.appendChild(red)
        
        } else if ( i%2 == 0){
            blue_1.appendChild(red)
    }
})

// ---------- EXO 5

let btn_add = document.querySelector(".add")
let eggs = document.querySelector("#eggs")

btn_add.addEventListener("click", () =>{
    let img = document.createElement("img")
    img.setAttribute("src", "./../cs-miniprojet-recapjs/public/img/oeuf.png")
    img.style.width = "200px"
    img.style.marginLeft = "50px"
    eggs.appendChild(img)
})