let card = document.getElementById("cardno");
let div = document.getElementById("options")

card.addEventListener('blur',()=>{

    let input = card.value.startsWith("442255");
    let cvv = document.getElementById("cvv");
    

    if(input){

        div.style.display="block";
        cvv.disabled=false;
        cvv.focus();
    }
    else{
        alert("Invalid card number");
    }

    cvv.addEventListener('blur',()=>{

        let select = document.getElementById("select");

        if(cvv.value.length == 3 ){

            select.disabled = false;

        }
        else{
            alert("Invalid cvv");
        }

        select.addEventListener('change',()=>{

            let pay = document.getElementById('btn');

            pay.disabled=false;

        })



    })

})