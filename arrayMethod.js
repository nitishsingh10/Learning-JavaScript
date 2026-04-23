let users = [{id:121, name : "Nitish", class:"B1", age:17},{id:125, name : "Krishna", class:"B1", age:20},{id:46, name : "Dhruv", class:"B1", age:20}];

let root = document.getElementById("root");

let ul = document.createElement("ul");

function render(name){

    ul.innerHTML += `<li>${name}</li>`;
    root.appendChild(ul);
}


users.forEach((data)=>{
    render(data.name);
});

document.getElementById("btn").addEventListener('click',()=>{

    users.filter(()=>{
        
    })

})