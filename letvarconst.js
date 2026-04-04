let userdata = document.getElementById('userdata');
let msg = document.getElementById("msg");
let comment = document.getElementById('comment');
let warn = document.getElementById('warning');

userdata.addEventListener('keyup',(e)=>{
    let length = e.target.value.length

    if(length == 0){
        msg.innerHTML = `<p style = 'color : red'> Username is required </p>`
    }
    else if(length < 4){
        msg.innerHTML = `<p style = 'color : red'> Username is too short</p>`
    }
    else{
        msg.innerHTML = '';
    }
})

// comment.addEventListener('keyup',(e)=>{

//     let length = e.target.value.length;

//     if(length <=20){

//         if(length>10){
    
//             warn.innerText = `${20-length} no. of chars left`;
//         }
        
//     }
//     else{
//         warn.innerText = `Typing not permitted`;


//     }


// })