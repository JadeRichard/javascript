export let input_task = document.getElementsByTagName("input")[0]
export let enter = document.querySelector(".enter")
export let tasks = document.querySelector(".tasks")
export let clear = document.querySelector(".clear")
export let mode = document.querySelector(".mode")
export let all = document.querySelector("button.all")
export let todo = document.querySelector("button.todo")
export let done = document.querySelector("button.done")



export let create_task = () =>{
    let show = (e) =>{
        e.parentElement.style.display = "flex"
    }

    let hide = (e) =>{
        e.parentElement.style.display = "none"
    }
    let new_task = document.createElement("div")
    new_task.classList.add("class", "ttodo")
    let nt_p = document.createElement("p")
    let nt_check = document.createElement("input")
    let nt_delete = document.createElement("button")
    let nt_modify = document.createElement("button")


    nt_p.innerText = input_task.value
    
    nt_check.setAttribute("type", "checkbox")
    nt_check.setAttribute("class", "checks")
    nt_delete.setAttribute("id", "buttond")
    nt_modify.setAttribute("id", "buttonm")
    nt_delete.className = "delete_yourself"
    nt_modify.className = "modify_yourself"

    let ntd_text = document.createTextNode("X")
    let ntm_text = document.createTextNode(`"..."`)
    
    new_task.appendChild(nt_check)
    new_task.appendChild(nt_p)
    new_task.appendChild(nt_modify)
    new_task.appendChild(nt_delete)

    
    
    nt_delete.appendChild(ntd_text)
    nt_modify.appendChild(ntm_text)
    
    new_task.setAttribute("class", "new_task")
    let body_color = document.body
    if(body_color.className == "s_body"){
        console.log("coucou");
        new_task.classList.add("s_task")
    }
    tasks.appendChild(new_task)
    input_task.value = ""
    
    let delete_yourself = document.getElementsByClassName("delete_yourself");
    for (let i = 0; i < delete_yourself.length; i++) {
        delete_yourself[i].onclick = function() {
            if(confirm("Do you really want to delete this task ?")){
        let this_task = this.parentElement;
        this_task.style.display = "none";
        }
    }

    let checks = document.getElementsByClassName("checks")

    for(let i = 0; i < checks.length; i++){
        let i2 = 1
        checks[i].onclick = function() {
            i2++
            if( i2%2 == 0 ){
                checks[i].parentElement.classList.add("tdone")
                checks[i].parentElement.classList.remove("ttodo")
                all.addEventListener("click", () =>{
                    show(checks[i])
                })
                todo.addEventListener("click", () =>{
                    hide(checks[i])
                })
                done.addEventListener("click", () =>{
                    show(checks[i])
                })

            } else {
                checks[i].parentElement.classList.add("ttodo")
                checks[i].parentElement.classList.remove("tdone")
                all.addEventListener("click", () =>{
                    show(checks[i])
                })
                todo.addEventListener("click", () =>{
                    show(checks[i])
                })
                done.addEventListener("click", () =>{
                    show(checks[i])
                })
            }
        }
    }

    let filter = document.getElementsByClassName("new_task")

    for (let i =0; i < filter.length; i++){
        all.addEventListener("click", () =>{
            show(checks[i])
        })
        done.addEventListener("click", () =>{
            filter[i].classList.add("dnone")
        })

    }

    let modify_yourself = document.getElementsByClassName("modify_yourself");
    let modify_yourself_a = document.getElementsByTagName("p");

    for (let i = 0; i < modify_yourself.length; i++) {
        modify_yourself[i].onclick = function() {
            let this_task = this.parentElement;
            let this_value = this_task.children[1].innerText
            this_task.children[1].remove()
            let rename = document.createElement("input")
            rename.setAttribute("class", "rename")
            rename.value = this_value
            this_task.insertBefore(rename, modify_yourself[i])
            rename.addEventListener("keydown", (e) =>{
                if (e.keyCode === 13){
                    rename.style.display = "none;"
                    let rename_value = rename.value
                    let new_ntp = document.createElement("p")
                    new_ntp.setAttribute("class",".new_task>p")
                    this_task.insertBefore(new_ntp, modify_yourself[i])
                    rename.remove()
                    new_ntp.innerText = rename_value 
                
                    }
                })   
            }
        }

        modify_yourself_a[i].ondblclick = function() {
            let this_task = this.parentElement;
            let this_value = this_task.children[1].innerText
            this_task.children[1].remove()
            let rename = document.createElement("input")
            rename.setAttribute("class", "rename")
            rename.value = this_value
            this_task.insertBefore(rename, modify_yourself[i])
            rename.addEventListener("keydown", (e) =>{
                if (e.keyCode === 13){
                    rename.style.display = "none;"
                    let rename_value = rename.value
                    let new_ntp = document.createElement("p")
                    new_ntp.setAttribute("class",".new_task>p")
                    this_task.insertBefore(new_ntp, modify_yourself[i])
                    rename.remove()
                    new_ntp.innerText = rename_value 
                
                    }
                })   
            }
        
    }

    
    
        

    
    
}

let body1 = document.body
let content_div = document.querySelector(".content")
let h1 = document.querySelector("h1")
console.log(content_div);

export let sombre = () =>{
    body1.classList.add("s_body")
    content_div.classList.add("class", "s_content")
    h1.classList.add("class", "s_h1")
    mode.classList.add("class", "s_mode")
    input_task.classList.add("class", "s_input")
    enter.classList.add("class", "s_enter")
    all.classList.add("class", "s_all")
    todo.classList.add("class", "s_todo")
    done.classList.add("class", "s_done")
    clear.classList.add("class", "s_clear")
}
    


