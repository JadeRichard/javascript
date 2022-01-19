import {enter} from "./_variables.js"
import {clear} from "./_variables.js"
import { input_task } from "./_variables.js";
import { tasks } from "./_variables.js";
import { mode } from "./_variables.js";

import { create_task } from "./_variables.js";

enter.addEventListener("click", create_task)

input_task.addEventListener("keydown", (e) =>{
    if (e.keyCode === 13){
    create_task()
}
})

clear.addEventListener("click", () =>{
    for(let i = 0; tasks.children.length > 0; i++){
        tasks.removeChild(tasks.lastChild)
    }
})

mode.addEventListener("click", () =>{
    console.log("mode sombre");
})




    

    
