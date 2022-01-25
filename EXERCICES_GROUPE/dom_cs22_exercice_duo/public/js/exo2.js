//1

let btn = document.querySelector('button')
let container = document.querySelector('#mignon-container')
btn.addEventListener('click',()=>{
let img = document.createElement('img')
container.appendChild(img)
img.setAttribute('src','../images/mignons.gif')
img.setAttribute('width','200')



})

//2

let container2 = document.querySelector('#mignon2-container')
let images = document.querySelectorAll('#mignon2-container>img')
console.log(images);
countdown = 5

images.forEach(element => {
    element.addEventListener("click", () =>{
        countdown--;
        console.log(container2.children.length)
        element.remove()
        if (countdown == 0){
            for(let i = 0; i < 5; i++){
                let function_02 = () =>{
                    setTimeout(() => {
                        let img2 = document.createElement('img')
                        container2.appendChild(img2)
                        img2.setAttribute('src','../images/mignons2.gif')
                        img2.setAttribute('width','200')
                        img2.setAttribute('style','margin-right: 4px')
                        
                        img2.addEventListener("click", () =>{
                                img2.remove()
                                if (container2.children.length == 0){
                                    for(let i = 0; i < 10; i++){
                                        function_02()
                                        i++
                                    }
                                    
                            }
                        })
                    }, 1000);
                }        
                function_02()
            }
        }
    })
})


//3

let ul_01 = document.querySelector('#exo-add-li > ul')

let li = document.createElement('li')

ul_01.insertBefore(li,ul_01.lastElementChild)
li.textContent = "li num 2"



//4 

let btn_submit = document.querySelectorAll("button")[1]

let input_4 = document.getElementsByTagName("input")[0]
let ul_02 = document.getElementsByTagName('ul')[1]

let fonction_4 = (e) =>{
    if(btn_edit.style.backgroundColor == "green"){
        if (li_01 == undefined){
            li_01 = e.target
        } else if (li_01 != undefined){
            li_02 = e.target
        }
        if (li_01 && li_02){
            temp = li_01.textContent
            li_01.textContent = li_02.textContent
            li_02.textContent = temp
            li_01 = undefined
            li_02 = undefined
        }
    }
}

btn_submit.addEventListener("click", () =>{
    let new_li_04 = document.createElement('li')
    new_li_04.innerText = input_4.value
    ul_02.append(new_li_04)
    input_4.value = ""
    new_li_04.addEventListener("click", fonction_4)
})

let btn_edit = document.querySelectorAll("button")[2]

let li_01
let li_02 
let temp 

btn_edit.addEventListener("click", () =>{
    if (btn_edit.style.backgroundColor == "green"){
        btn_edit.style.backgroundColor = "#f8f9fa"
    } else {
        btn_edit.style.backgroundColor = "green"
    }
})

Array.from(ul_02.children).forEach(li => {
    li.addEventListener("click", fonction_4)
})



