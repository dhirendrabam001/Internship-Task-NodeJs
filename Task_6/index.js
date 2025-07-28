const fs = require("fs");
const http = require("http");
const path = require("path");


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
            res.end(JSON.stringify({ message: "Data Get successfully", bodyData }));
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
            res.end(JSON.stringify({ message: "Data has been posted successfully", userData }));
        });
    }

    // PUT Operation
    else if (req.method === "PUT" && req.url === "/userdata") {
        let startingData = "";
        req.on("data", (chunk) => {
            // startingData.push(chunk);
            startingData += chunk.toString();
            console.log(startingData);
            
        });

        req.on("end", () => {
            try {
                const finalData = JSON.parse(startingData);
                console.log("Data Show", finalData);
                const updateData = {
                    id: Date.now(),
                    name: finalData.name || "Dhiraj",
                    role: finalData.role || "Backend Developer"
                }
              JSON.stringify({message: "can data is found?", data:  updateData});

                fs.writeFile(pathName, JSON.stringify(updateData), "utf8", (error) => {
                    if (error) {
                        res.writeHead(400, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify({message: "Failed to write data", error: error}));
                    } else {
                        res.writeHead(200, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify({message: "Data has been completed updated", data: updateData}));
                    }
                });

            } catch (error) {
                res.end(JSON.stringify({ message: "Invalid Data find", error}));
            }
        });

    }

    // unknow routes 
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

const PORT = 2200;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
