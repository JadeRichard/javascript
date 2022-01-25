//1

let button_1 = document.getElementsByTagName("input")[0]
let button_2 = document.getElementsByTagName("input")[1]
let button_3 = document.getElementsByTagName("input")[2]

let div_1 = document.getElementsByTagName("div")[0]
let h1_1 = document.getElementsByTagName("h1")[0]
let ul_1 = document.getElementsByTagName("ul")[0]

let delete_1 = () =>{
    div_1.removeChild(h1_1)
}

button_1.addEventListener("click", delete_1)

let delete_2 = () =>{
    ul_1.removeChild(ul_1.lastElementChild)
}

button_2.addEventListener("click", delete_2)

let delete_3 = () =>{
    ul_1.removeChild(ul_1.children[Math.floor(Math.random()*ul_1.children.length)])
}

button_3.addEventListener("click", delete_3)


//2

let new_li = document.createElement("li")
let new_li_text = document.createTextNode("1234")
new_li.appendChild(new_li_text)

let button_4 = document.getElementsByTagName("input")[3]
let ul_2 = document.getElementsByTagName("ul")[1]

let replace_1 = () =>{
    ul_2.replaceChild(new_li, ul_2.children[1])
}

button_4.addEventListener("click", replace_1)

let button_5 = document.getElementsByTagName("input")[5]
let new_li_2 = document.createElement("li")
let input_1 = document.getElementById("replaceValue")

button_5.addEventListener("click", () =>{
    new_li_2.innerText = input_1.value
    ul_2.replaceChild(new_li_2, ul_2.children[2])
})





































/* 

//4

let ex4_ul = document.getElementsByTagName("ul")[1]
let new_li = document.createElement("li")
let li_text = document.createTextNode("Bong Joon-ho")

new_li.appendChild(li_text)

let button_04 = document.querySelectorAll("input")[3]
let deuxieme_li = document.getElementsByTagName("li")[7]


let replace = () =>{
    ex4_ul.replaceChild(new_li, deuxieme_li)
}

button_04.addEventListener("click", replace)

//5
let button_05 = document.querySelectorAll("input")[5]
let troisieme_li = document.getElementsByTagName("li")[8]
let input = document.querySelectorAll("input")[4]
let input_text = input.textContent
let replace_2 = () =>{
    let dernier_li = document.createElement("li")
    let dernier_li_text = input.value
    dernier_li.append(dernier_li_text)
    ex4_ul.replaceChild(dernier_li, troisieme_li)
}

button_05.addEventListener("click", replace_2)

let btn1 = document.querySelectorAll('input')[0]
let btn2 = document.querySelectorAll('input')[1]
let btn3 = document.querySelectorAll('input')[2]
let div1 = document.querySelector('div')
let h1 = document.querySelector('h1')
let dernier = document.querySelectorAll('li')[5]

let ul = document.querySelector('ul')
console.log(btn2);
//01
btn1.addEventListener("click",()=>{
    div1.removeChild(h1)
})
//02


btn2.addEventListener("click",()=>{
    ul.removeChild(dernier)
})
//03

btn3.addEventListener("click",()=>{
    
    let f =()=>{
        let random = Math.floor(Math.random()*4+1)
let tb = [btn1,btn2,h1,ul]
tb[random].remove()
tb.splice(random,1)
        }
        
f()
})
console.log(ul);





let blague = document.createElement('button')
let body = document.querySelector('body')
body.appendChild(blague)

blague.style.height = "300px"
blague.style.width = "300px"

blague.addEventListener('click',()=>{
body.style.backgroundColor="red"
let h5 = document.querySelector('h5')
body.appendChild(h5)
h5.textContent = "ADIL IL EST GANG"
h5.style.fontSize = "150px"
h5.style.textAlign = "center"


}) */