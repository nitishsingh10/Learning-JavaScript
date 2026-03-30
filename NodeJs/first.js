const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        res.write(`<h1>
        select where you want to go : 
            </h1>

            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            `);

            return res.end();

    }
    if (req.url === '/home') {

        res.write(`<h1>This is the Home page</h1>
            
            <br>
            <br>
            <button><a href="/">Main</a></button>
            `);

        return  res.end();

    }
    if (req.url === '/about') {

        res.write(`<h1>This is the About page</h1>
            
            <br>
            <br>
            <button><a href="/">main</a></button>
            `);


        return  res.end();

    }
    if (req.url === '/contact') {

        res.write(`<h1>This is the Contact page</h1>
            <br>
            <br>
            <button><a href="/">main</a></button>`);

        return  res.end();

    }
    if (req.url === '/services') {

        res.write(`<h1>This is the Services page</h1>
            <br>
            <br>
            <button><a href="/">main</a></button>`);

        return  res.end();

    }
    if (req.url === '/blog') {

        res.write(`<h1>This is the Blog page</h1>
            <br>
            <br>
            <button><a href="/">main</a></button>`);

        return  res.end();

    }

    res.end()

}).listen(PORT,()=>{
    console.log("To do list start on http://localhost:"+PORT);
})