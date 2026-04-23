// let userdata = document.getElementById('userdata');
// let msg = document.getElementById("msg");
// let comment = document.getElementById('comment');
// let warn = document.getElementById('warning');

// userdata.addEventListener('keyup',(e)=>{
//     let length = e.target.value.length

//     if(length == 0){
//         msg.innerHTML = `<p style = 'color : red'> Username is required </p>`
//     }
//     else if(length < 4){
//         msg.innerHTML = `<p style = 'color : red'> Username is too short</p>`
//     }
//     else{
//         msg.innerHTML = '';
//     }
// })

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





// let usrdata = document.getElementById("userdata");
// let img = document.getElementById("cardimg");

// usrdata.addEventListener('blur',(e)=>{
    
//     if(e.target.value.startsWith("44")){


//     }

// })


// let mail = document.querySelector("#usermail");

// mail.addEventListener('blur',(e)=>{

//     let text = e.target.value;

//     let flag = text.search("@");
//     let flag2 = text.endsWith("gmail.com");

//     if(flag ==-1){

//         document.getElementById('msg').innerHTML = `<p style = 'color : red'>Invalid email</p>`

//     }else if(flag2){
//         document.getElementById('msg').innerHTML = `<p style = 'color : green'>ok</p>`
//     }
//     else{
//         document.getElementById('msg').innerHTML = `<p style = 'color : red'>Only Gmail allowed</p>`
//     }

// })

// let state = document.getElementById('check');
// let text = document.getElementById('text');
// state.addEventListener('change',(e)=>{
    
//     if(e.target.value == "on"){
//         text.removeAttribute("disabled");
//         console.log(e.target.value)
//     }

// })

// let check = document.getElementById("ckeck");

// let mess = document.getElementById('message');

// check.addEventListener('change',()=>{

    

// })


// number and mail

// let input = document.getElementById('input');
// let btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{

//     let flag = input.value.trim()
//                             .replaceAll("-","")
//                             .match(/\+91\d{10}/);


//     if(flag){

//         document.getElementById('msg').innerHTML=`<p style = "color : green"> Message sent to : ${flag[0].slice(3,5)+"******"+flag[0].slice(-2)}</p>`

//     }
//     else{
//         document.getElementById('msg').innerHTML = `<p style = "color : red">Invalid number</p>`
//     }

// })

// let email = document.getElementById("emailid");
// let btns = document.getElementById("btn-s");

// btns.addEventListener('click',()=>{
    
//     if(email.value.endsWith("@gmail.com")){
        
        


//     }

// })