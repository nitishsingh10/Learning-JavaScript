// let btns = document.getElementById("buttons");
// let text = document.getElementById("color");

// btns.addEventListener('mouseover',(e)=>{

//     text.style.color = e.target.textContent;

// })

document.getElementById('image').addEventListener('click',(e)=>{

    let xAxis = e.x >= 160 && e.x <= 190;
    let yAxis = e.y >= 127 && e.y <= 158;

    if(yAxis && xAxis){
        document.getElementById('price').innerHTML = `Price is &#8377 2000`
    }
    console.log(e);
    
})