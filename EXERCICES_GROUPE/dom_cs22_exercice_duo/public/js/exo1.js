//1 

let button_01 = document.getElementsByTagName("button")[0]

let counter = document.getElementsByTagName("span")[0]

let i = 1



button_01.addEventListener("click", () => {
    counter.textContent = i;
    i++
})


// 2

let square = document.querySelector('#square')


square.addEventListener('click', () => {
    square.classList.toggle('on')
    square.classList.toggle('off')
    if (square.className == 'on') {
        document.querySelector('.on').textContent = "on"

    } else {
        document.querySelector('.off').textContent = "off"

    }

})

//3

let all_titles = document.querySelectorAll("h2")
let tableau_3 = [1, 2, 3, 4, 5]
let counter_3 = 1
let stpfonctionne = 

document.addEventListener("keypress", (e) => {
    if (e.key == 6) {
        counter_3++;
        if (counter_3 % 2 == 0) {
            for (let i = 0; i < tableau_3.length; i++) {
                let add = tableau_3[i] + ". "
                all_titles[i].textContent = add + all_titles[i].textContent
            }
        } else {
            for (let i = 0; i < tableau_3.length; i++) {
                
                all_titles[i].textContent = all_titles[i].textContent.substring(3,all_titles[i].textContent.length)
                console.log(all_titles[i].textContent);
               
            }
        }
    }
})

//4
let multiclik = document.querySelector('#multi-click')
console.log(multiclik);
let click = ()=>{
multiclik.addEventListener('click',()=>{
multiclik.style.borderRadius = "50%"
multiclik.addEventListener('click',()=>{
multiclik.style.backgroundColor = "red"
multiclik.addEventListener('click',()=>{
multiclik.style.borderRadius = "0%"
multiclik.style.backgroundColor = "white"
click()
})
})
})
}
click()


//5

let color_input = document.querySelector("#pick-color")
let p_5 = document.querySelector("#para")

color_input.addEventListener("change", () =>{
    p_5.style.color = color_input.value
})

/*c'est mieux avec 'input' que 'change' :((( */ 
