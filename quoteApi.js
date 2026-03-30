
// Random quote..

    // <div id="container">

    //     <h1>Quote for the day is...</h1>

    //     <p id="quote">
            
    //     </p>
    //     <button id="getq">
    //         get quote
    //     </button>

    // </div>

const URL = "https://api.allorigins.win/get?url=https://type.fit/api/quotes"
const quote = document.getElementById("quote");

const btn = document.getElementById("getq");

const getQuote = async () =>{
    let response = await fetch(URL);
    let content = await response.json()
    let data = JSON.parse(content.contents);
    console.log(data);
    
    let qn = Math.floor(Math.random() * data.length);

    quote.innerText = `${data[qn].text}`;

    let au = document.createElement("h4");

    au.innerText = `Author : ${data[qn].author}`;

    quote.appendChild(au);

}

// getQuote();

btn.addEventListener('click',()=>{
    getQuote();
    console.log("getting quote...")
});