// Requirements
const http = require("http")


const server = http.createServer((req, res) => {
    console.log(req.url)
    //Reponse 
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end("<h1>Hello Node!!!!</h1>")
}).listen(3000, () => console.log("Server is running on port 3000 ..."))