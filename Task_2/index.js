// CRUD OPERATION WITH GET POST PUT DELETE UPDATE
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`
            <!DOCTYPE html>
             <html lang="en">
             <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Grud Operation Nodejs</title>
             </head>
             <body>
             <h1>Welcome To Our Crud Operation</h1>   
    
             </body>
             </html>
            
            `)
        return res.end();
    }

    // GET OPERATION
    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
            <form action="/users" method="POST">
            <input type="text" name="username" placeholder="Enter Your Username" required><br>
            <input type="email" name="email" placeholder="Enter Your Email" required><br>
            <button type="submit">Send</button><br>
            </form>
            </body>
            </html>
            `)
        return res.end();
    };

    // POST OPERATION
    if (req.method === "POST" && req.url === "/users") {
        
    const bodyData = [];
        req.on("data", (chank) => {
            bodyData.push(chank);
            console.log("Chank is loaded sucussfully", chank);
       
         });
        req.on("end", () => {
            const buffData = Buffer.concat(bodyData).toString();
            console.log(buffData);   

            const params = new URLSearchParams(buffData);
            const mainObject = Object.fromEntries(params);
            console.log("Final Result Show Sucussfully", mainObject);
            // console.log(JSON.stringify(mainObject));
            
                   
       
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
            <h2>Thank You, ${mainObject.username} We will contact Us this email ${mainObject.email} Quickly</h2>
            </body>
            </html>
            `);
        return res.end();
         });
    }

    // PUT OPERATION
    if(req.method === "PUT" && req.url === "/users") {
        const startData = [];
        req.on("data", (chank) => {
            startData.push(chank);
            console.log("Put chank data read sucussfully", chank);
        });
        
        req.on("end", () => {
            const bufferData = Buffer.concat(startData).toString();
            console.log("Buffer Data Updated", bufferData);
            // const paramData = new URLSearchParams { 'username' => 'update username', }
            console.log(paramData);
            const finalData = Object.fromEntries(paramData);
            console.log(finalData);

            res.writeHead(200, {"Content-type" : "application/json"});
            res.end(JSON.stringify({message: "Data Has Been Updated", finalData}));
            
            
            
        })
    }





});
const PORT = 3300
server.listen(PORT, () => {
    console.log(`Server Is Running http://localhost:${PORT}`);


})


