let h1 = document.querySelector("h1")

let click = () =>{
    h1.setAttribute("class", "text-blue")
}

h1.addEventListener("click", click)


let h3 = document.querySelector("h3")

let doubleClick = () =>{
    h3.setAttribute("class", "text-error")
}

h3.addEventListener("dblclick", doubleClick)

let p = document.querySelector("p")

p.addEventListener("click",() =>
p.classList.toggle('text-style'))

let span = document.querySelectorAll("span")[0]

let wClick1 = () =>{
    span.setAttribute("class", "bolder")
}

span.addEventListener("click", wClick1);


let span2 = document.querySelectorAll("span")[1]

let wClick2 = () =>{
    span2.setAttribute("class", "bolder")
}

span2.addEventListener("click", wClick2);


let span3 = document.querySelectorAll("span")[2]

let wClick3 = () =>{
    span3.setAttribute("class", "bolder")
}

span3.addEventListener("click", wClick3);


// 5

let exo5 = document.getElementsByTagName("p")[2].children;
[...exo5].forEach((element) => {
  element.addEventListener("click", () => {
    [...exo5].forEach((e) => {
      e.classList.remove("bolder-red");
    });
    element.classList.add("bolder-red");
  });
});




















