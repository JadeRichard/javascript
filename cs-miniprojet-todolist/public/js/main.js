import {enter} from "./_variables.js"
import {clear} from "./_variables.js"
import { input_task } from "./_variables.js";
import { tasks } from "./_variables.js";

enter.addEventListener("click", () =>{
    let task = document.createElement("input")
    task.value = input_task.value
    tasks.appendChild(task)
    input_task.value = ""
})

clear.addEventListener("click", () =>{
    for(let i = 0; tasks.children.length > 0; i++){
        tasks.removeChild(tasks.lastChild)
    }
})