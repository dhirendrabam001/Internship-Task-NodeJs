const fs = require("fs");
const http = require("http");
const path = require("path");
const { json } = require("stream/consumers");

// File name and path
const fileName = "dhirendr.txt";
const pathName = path.join(__dirname, fileName);

// Log path
console.log("Using file:", pathName);

// Create file if not exists
if (!fs.existsSync(pathName)) {
    fs.writeFileSync(pathName, "", "utf8");
    console.log("File Created Successfully");
}

const server = http.createServer((req, res) => {

    // GET Operation
    if (req.method === "GET" && req.url === "/userdata") {
        fs.readFile(pathName, "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Error reading file", error }));
            }

            let bodyData = {};
            try {
                bodyData = data.trim() ? JSON.parse(data) : {};
            } catch (err) {
                bodyData = {};
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Data Get successfully",bodyData}));
        });
    }

    // POST Operation
    else if (req.method === "POST" && req.url === "/userdata") {
        const userData = {
            id: Date.now(),
            name: "Dhirendra",
            role: "Frontend And Backend Developer"
        };

        fs.writeFile(pathName, JSON.stringify(userData), "utf8", (error) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Error writing file", error }));
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Data has been posted successfully",data: userData}));
        });
    }

    // PUT Operation placeholder
    else if (req.method === "PUT" && req.url === "/userdata") {
        let dataBody = "";
        req.on("data", (chunk) => {
            dataBody.push(chunk);
            console.log(dataBody);
            
        });
        req.on("end", () => {
            try {
                const updateData = JSON.parse(dataBody);
                console.log(updateData);
                
            } catch {

            }
        })
    }

    // unknow routes 
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

const PORT = 2200;
server.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
