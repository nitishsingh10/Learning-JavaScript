// let arr = [2,4,6,8,10];

// let arr2 = arr.map((e)=>{

//     e = e + 5;
//     return e*2;

// }).filter((e)=>{
//     return e>15;
// });

// let arr3 = arr2.forEach((e)=>{
//     plus(e);
// });

// function plus(e){
//     console.log(e+100);
// }

// let count = arr.reduce((s,e)=>{
//     return s+e;
// },0);

// console.log(count);

// const cart = [10, 20, 30];
// const total = cart.reduce((sum, item) => sum + item, 0); // 60
// console.log(total); //


// find

let users = [{id:121, name : "Nitish", class:"B1", age:17},{id:125, name : "Krishna", class:"B1", age:20},{id:46, name : "Dhruv", class:"B1", age:20}];


let arr2 = users.find((e)=>{
    return e.id == 126;
});

console.log(arr2 || "not found");