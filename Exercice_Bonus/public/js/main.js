let pions_w = document.querySelectorAll(".p_w")
let pions_b = document.querySelectorAll(".p_b")

let case_w = document.querySelectorAll(".c2")
let case_b = document.querySelectorAll(".c1")

let pionw0 = false
let pionw1 = false
let pionw2 = false
let pionw3 = false
let pionw4 = false
let pionw5 = false
let pionw6 = false
let pionw7 = false
let pionw8 = false
let pionw9 = false
let pionw10 = false
let pionw11 = false
let pionw12 = false
let pionw13 = false
let pionw14 = false
let pionw15 = false
let pionw16 = false
let pionw17 = false
let pionw18 = false
let pionw19 = false

let caseb0 = false
let caseb1 = false
let caseb2 = false
let caseb3 = false
let caseb4 = false
let caseb5 = false
let caseb6 = false
let caseb7 = false
let caseb8 = false
let caseb9 = false
let caseb10 = false
let caseb11 = false
let caseb12 = false
let caseb13 = false
let caseb14 = false
let caseb15 = false
let caseb16 = false
let caseb17 = false
let caseb18 = false
let caseb19 = false
let caseb20 = false
let caseb21 = false
let caseb22 = false
let caseb23 = false
let caseb24 = false
let caseb25 = false
let caseb26 = false
let caseb27 = false
let caseb28 = false
let caseb29 = false
let caseb30 = false
let caseb31 = false
let caseb32 = false
let caseb33 = false
let caseb34 = false
let caseb35 = false
let caseb36 = false
let caseb37 = false
let caseb38 = false
let caseb39 = false
let caseb40 = false
let caseb41 = false
let caseb42 = false
let caseb43 = false
let caseb44 = false
let caseb45 = false
let caseb46 = false
let caseb47 = false
let caseb48 = false

let move24 = (e) =>{
    case_b[24].addEventListener("click", () =>{
        case_b[24].append(e)
    })
}

let move28 = (e) =>{
    case_b[28].addEventListener("click", () =>{
        case_b[28].append(e)
    })
}

let move29 = (e) =>{
    case_b[29].addEventListener("click", () =>{
        case_b[29].append(e)
    })
}

pions_w[18].addEventListener("click", () =>{
    pionw18 = true
    caseb24 = true
    if (case_b[24].children.length == 0){
        move24(pions_w[18])
    }
    
    if (case_b[28].children.length == 0){
        move28(pions_w[18])
    }

    if (case_b[29].children.length == 0){
        move29(pions_w[18])
    }
})

pions_w[19].addEventListener("click", () =>{
    pionw19 = true
    caseb24 = true
    
    if (case_b[24].children.length == 0 && caseb24){
        caseb24 = false
        caseb28 = true
        caseb29 = true
        move24(pions_w[19])
        
    } 

    if (case_b[28].children.length == 0 && caseb28){
        caseb28 = false
        caseb24 = false
        move28(pions_w[19])
    } 

    if (case_b[29].children.length == 0 && caseb29){
        caseb29 = false
        move29(pions_w[19])
    } 
})