
const Arrowbutton = document.querySelector("button");
const Tygo = document.querySelector("body > img:nth-of-type(1)");

Arrowbutton.addEventListener("click", trippen);

function trippen(){
    Tygo.classList.toggle("spin")
}
    