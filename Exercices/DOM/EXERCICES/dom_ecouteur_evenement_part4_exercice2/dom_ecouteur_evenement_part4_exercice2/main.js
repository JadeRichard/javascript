let h1 = document.querySelector("h1")

let doubleCl = () =>{
    h1.setAttribute("style", "background-color: red; color:white;")
}

h1.addEventListener("dblclick", doubleCl)

let h3 = document.querySelector("h3")

let hoverPop = () =>{
    h3.innerText = h3.textContent.slice(0, h3.textContent.length - 1 )
}

h3.addEventListener("mouseover", hoverPop)

let p = document.querySelector("p");
let pCounter = 0;

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}

function blueGoldOn(){
    p.style.backgroundColor = "blue";
    p.style.color = "gold";
};

function blueGoldOff(){
    p.style.backgroundColor = "unset";
    p.style.color = "unset";
};

function blueGoldOk(){
    if(isEven(pCounter) != true){
        blueGoldOff();
    }else{
        blueGoldOn();
    }
    pCounter++;
};

p.addEventListener("click",blueGoldOk);


