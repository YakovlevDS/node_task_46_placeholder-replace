const http = require("http");
const fs = require("fs");
 
http.createServer((req, res)=>{
     
    fs.readFile("index.html", "utf8", (e, data)=>{
                 
        let message = "Hello my friend"; 
        let header = "It's main page";
        data = data.replace("{header}", header).replace("{message}", message);
        res.end(data);
    })
}).listen(3000);