/* let div = document.getElementById("content")

let ex_1 = (e) =>{
    console.log(e)
}

div.addEventListener("click", ex_1)
document.getElementsByTagName("h1")[0].addEventListener("click", ex_1)
document.getElementsByTagName("h1")[1].addEventListener("click", ex_1)
 */


function nom1 (e){
    console.log(e.target);
    e.target.style.border = "1px solid red";
};

div.addEventListener("click",nom1);


