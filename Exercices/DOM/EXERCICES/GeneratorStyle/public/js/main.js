let big_div = document.querySelector(".big_div")

let btn_white = document.querySelector("#btn_1")
let btn_red = document.querySelector("#btn_2") 
let btn_green = document.querySelector("#btn_3") 
let btn_blue = document.querySelector("#btn_4") 

let btn_full = document.querySelector("#btn_5") 
let btn_dashed = document.querySelector("#btn_6") 
let btn_dotted = document.querySelector("#btn_7") 

let btn_s_top = document.querySelector("#btn_8") 
let btn_m_top = document.querySelector("#btn_9") 
let btn_l_top = document.querySelector("#btn_10") 

let input_color = document.querySelectorAll("input")[0]
let input_1 = document.querySelectorAll("input")[1] 
let input_2 = document.querySelectorAll("input")[2] 
let input_3 = document.querySelectorAll("input")[3] 
let input_4 = document.querySelectorAll("input")[4] 
let input_5 = document.querySelectorAll("input")[5] 

let input_6 = document.querySelectorAll("input")[6] 
let input_7 = document.querySelectorAll("input")[7] 
let input_8 = document.querySelectorAll("input")[8] 
let input_9 = document.querySelectorAll("input")[9] 
let input_10 = document.querySelectorAll("input")[10] 


// -------------- COLORS 

btn_white.addEventListener("click", () =>{
    big_div.style.background = "#efefef"
})

btn_red.addEventListener("click", () =>{
    big_div.style.background = "#dd4b39"
})

btn_green.addEventListener("click", () =>{
    big_div.style.background = "#00a65a"
})

btn_blue.addEventListener("click", () =>{
    big_div.style.background = "#3c8dbc"
})

// -------------- BORDERS TYPE

btn_full.addEventListener("click", () =>{
    big_div.style.border = "solid"
    big_div.style.borderWidth = input_1.value+"px"
    big_div.style.borderTopWidth = input_2.value+"px"
    big_div.style.borderRightWidth = input_3.value+"px"
    big_div.style.borderBottomWidth = input_4.value+"px"
    big_div.style.borderLeftWidth = input_5.value+"px"
    

})

btn_dashed.addEventListener("click", () =>{
    big_div.style.border = "dashed"
    big_div.style.borderWidth = input_1.value+"px"
    big_div.style.borderTopWidth = input_2.value+"px"
    big_div.style.borderRightWidth = input_3.value+"px"
    big_div.style.borderBottomWidth = input_4.value+"px"
    big_div.style.borderLeftWidth = input_5.value+"px"
})

btn_dotted.addEventListener("click", () =>{
    big_div.style.border = "dotted"
    big_div.style.borderWidth = input_1.value+"px"
    big_div.style.borderTopWidth = input_2.value+"px"
    big_div.style.borderRightWidth = input_3.value+"px"
    big_div.style.borderBottomWidth = input_4.value+"px"
    big_div.style.borderLeftWidth = input_5.value+"px"
})

// -------------- BORDERS SIZE 

btn_s_top.addEventListener("click", () =>{
    if(big_div.style.borderBottom == "dotted"){
        big_div.style.borderTop = "0px dotted"
    } else if (big_div.style.borderBottom == "dashed"){
        big_div.style.borderTop = "0px dashed"
    } else {
        big_div.style.borderTop = "0px solid"
    }
})

btn_m_top.addEventListener("click", () =>{
    if(big_div.style.borderBottom == "dotted"){
        big_div.style.borderTop = "5px dotted"
    } else if (big_div.style.borderBottom == "dashed"){
        big_div.style.borderTop = "5px dashed"
    } else {
        big_div.style.borderTop = "5px solid"
    }
})

btn_l_top.addEventListener("click", () =>{
    if(big_div.style.borderBottom == "dotted"){
        big_div.style.borderTop = "10px dotted"
    } else if (big_div.style.borderBottom == "dashed"){
        big_div.style.borderTop = "10px dashed"
    } else {
        big_div.style.borderTop = "10px solid"
    }
})

// -------------- INPUTS 

// BORDER COLOR

input_color.addEventListener("input", () =>{
    big_div.style.borderColor = input_color.value
})

//BORDER WIDTH

input_1.addEventListener("click", () =>{
    big_div.style.borderWidth = input_1.value+"px"
})

input_2.addEventListener("click", () =>{
    big_div.style.borderTopWidth = input_2.value+"px"
})

input_3.addEventListener("click", () =>{
    big_div.style.borderRightWidth = input_3.value+"px"
})

input_4.addEventListener("click", () =>{
    big_div.style.borderBottomWidth = input_4.value+"px"
})

input_5.addEventListener("click", () =>{
    big_div.style.borderLeftWidth = input_5.value+"px"
})



//BORDER RADIUS

input_6.addEventListener("click", () =>{
    big_div.style.borderRadius = input_6.value+"px"
})

input_7.addEventListener("click", () =>{
    big_div.style.borderTopLeftRadius = input_7.value+"px"
})

input_8.addEventListener("click", () =>{
    big_div.style.borderTopRightRadius = input_8.value+"px"
})

input_9.addEventListener("click", () =>{
    big_div.style.borderBottomRightRadius = input_9.value+"px"
})

input_10.addEventListener("click", () =>{
    big_div.style.borderBottomLeftRadius = input_10.value+"px"
})