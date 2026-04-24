let arr = [2,4,6,8,10];

let arr2 = arr.map((e)=>{

    e = e + 5;
    return e*2;

}).filter((e)=>{
    return e>15;
});

let arr3 = arr2.forEach((e)=>{
    plus(e);
});

function plus(e){
    console.log(e+100);
}


