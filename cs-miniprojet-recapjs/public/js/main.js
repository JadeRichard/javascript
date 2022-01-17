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

// ---------- EXO 6

let in_1 = document.querySelector("#inp_1")
let in_2 = document.querySelector("#inp_2")

let btn_calc = document.querySelector(".calcul")

let result_1 = document.querySelector(".result")

btn_calc.addEventListener("click", () =>{
    result_1.innerText = parseInt(in_1.value) + parseInt(in_2.value)
    in_1.value = ""
    in_2.value = ""
})

////////////////////////////////

let b_1 = document.querySelector(".b1")
let b_2 = document.querySelector(".b2")
let b_3 = document.querySelector(".b3")
let b_p = document.querySelector(".bp")
let b_4 = document.querySelector(".b4")
let b_5 = document.querySelector(".b5")
let b_6 = document.querySelector(".b6")
let b_m = document.querySelector(".bm")
let b_7 = document.querySelector(".b7")
let b_8 = document.querySelector(".b8")
let b_9 = document.querySelector(".b9")
let b_f = document.querySelector(".bf")
let b_c = document.querySelector(".bc")
let b_0 = document.querySelector(".b0")
let b_e = document.querySelector(".be")
let b_d = document.querySelector(".bd")
let plus = false
let moins = false
let fois = false
let divise = false
let free = true

let v1

let v2

let result_2 = document.querySelector(".result_2")

let input_cal = document.querySelector(".calculatrice>input")

b_1.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("1")
})
b_2.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("2")
})
b_3.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("3")
})
b_p.addEventListener("click", () =>{
    free = false
    plus = true;
    v1 = input_cal.value
    console.log(v1);
    input_cal.value = ""
    
})
b_4.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("4")
})

b_5.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("5")
})
b_6.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("6")
})
b_m.addEventListener("click", () =>{
    free = false
    moins = true;
    v1 = input_cal.value
    console.log(v1);
    input_cal.value = ""
})
b_7.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("7")
})
b_8.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("8")
})
b_9.addEventListener("click", () =>{
    free = false
    input_cal.value =  input_cal.value + parseInt("9")
})
b_f.addEventListener("click", () =>{
    free = false
    fois = true;
    v1 = input_cal.value
    console.log(v1);
    input_cal.value = ""
})
b_c.addEventListener("click", () =>{
    free = false
    plus = false
    moins = false
    fois = false
    divise = false
    v1 = ""
    result_2.innerText = "..."
    console.log(v1);
    input_cal.value = ""
})

b_0.addEventListener("click", () =>{
    free = false
    input_cal.value = input_cal.value + parseInt("0")
})

b_e.addEventListener("click", () =>{
   if (free){
       if(input_cal.value.includes("+")){
        let new1 = input_cal.value.split("+")
        result_2.textContent = parseInt(new1[0]) + parseInt(new1[1])
       } else if(input_cal.value.includes("-")){
        let new1 = input_cal.value.split("-")
        result_2.textContent = parseInt(new1[0]) - parseInt(new1[1])
       } else if(input_cal.value.includes("*")){
        let new1 = input_cal.value.split("*")
        result_2.textContent = parseInt(new1[0]) * parseInt(new1[1])
       } else if(input_cal.value.includes("/")){
        let new1 = input_cal.value.split("/")
        result_2.textContent = parseInt(new1[0]) / parseInt(new1[1])
       }
    
            
   } else {
   v2 = input_cal.value
    if (plus){
        result_2.innerText = parseInt(v1) + parseInt(v2)
    } else if (moins){
        result_2.innerText = parseInt(v1) - parseInt(v2)
    } else if (fois){
        result_2.innerText = parseInt(v1) * parseInt(v2)
    } else if (divise){
        result_2.innerText =parseInt(v1) / parseInt(v2)
    }
}
})

b_d.addEventListener("click", () =>{
    free = false
    divise = true;
    v1 = input_cal.value
    console.log(v1);
    input_cal.value = ""
    
})

