
/// CALLBACK HELL //////


function getCandy(ticket,callback1){

    console.log("ticket verified..",ticket);
    
    let candy = '🍬';
    setTimeout(() => {
        console.log("Here is your candy ->",candy);

        callback1(candy);
        
    }, 2000);

}

function getKey(candy,callback2){

    let key = '🔑' + candy;

    setTimeout(() => {
        console.log("Here is your Key and Candy ->",key);
        callback2(key);
    }, 2000);
}

function getBoard(key, callback3){

    let room = "🏨" + key;

    setTimeout(() => {
        console.log("Now you can get Boarded ->",room);
        callback3(room);
    }, 2000);
}


getCandy("🎟️",(candy)=>{

    setTimeout(()=>{
        console.log("Candy recieved..");
        getKey(candy,(key)=>{
            setTimeout(()=>{
                console.log("Key recieved...");
                getBoard(key,()=>{
                    console.log("all set..!");
                })
            },1000);
    
        })
    },1000);
})

