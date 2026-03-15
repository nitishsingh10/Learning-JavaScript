

////// PROMISES ASYNC-AWAIT. ///////////

function getCandy(ticket){
    return new Promise((resolve,reject)=>{
        let candy = '🍬'
        setTimeout(() => {
            console.log("ticket verified",ticket);
        }, 1000);
        setTimeout(() => {
            console.log("Here is your Candy",candy);
        }, 2000);

        resolve(candy);

    })
}

function getKey(candy){
    return new Promise((resolve,reject)=>{
        let key = candy + "🔑";
        setTimeout(() => {
            console.log("Here is your key",key);
        }, 3000);
        resolve(key);

    })
}

function getRoom(key){
    return new Promise((resolve,reject)=>{

        let room = "🏨" + key;
        setTimeout(() => {
            console.log("Here is your room",room);

            console.log("All set..!");
            
        }, 4000);

        resolve(200);
    })
}


async function onBoard() {
    
    let candy = await getCandy("🎟️");
    let key = await getKey(candy);
    await getRoom(key);
    
}




