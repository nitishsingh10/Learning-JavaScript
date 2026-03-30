let btns = document.getElementById("buttons");
let text = document.getElementById("color")

btns.addEventListener('click',(e)=>{
    text.style.color = e.target.textContent;

})