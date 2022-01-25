
let content = document.getElementById("content")

content.addEventListener("click", (event) => {
    switch (event.target) {
        case  document.querySelector("h1"):
            event.target.style.textDecoration = "underline";
            break;
            case  document.querySelector("h2"):
            event.target.innerText = event.target.innerText.substring(0, event.target.innerText.length - 1);
            break;
            case  document.querySelector("p"):
            event.target.style.color = "red";
            event.target.style.fontWeight = "bolder";
            break;
            case  document.querySelector("div"):
            event.target.style.border = "1px solid black";
            break;
    }
})