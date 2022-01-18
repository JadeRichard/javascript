import {enter} from "./_variables.js"
import { input_task } from "./_variables.js";
import { tasks } from "./_variables.js";

enter.addEventListener("click", () =>{
    console.log(input_task.value);
    let task = document.createElement("input")
    task.value = input_task.value
    tasks.appendChild(task)
    input_task.value = ""
})