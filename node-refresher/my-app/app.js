// const path = require("path");
// const os = require("os");
// const fs = require("fs");

// console.log(module);
// console.log(logger);
// logger("This message");

// const pathObj = path.parse(__filename);
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// console.log(pathObj);
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const files = fs.readdirSync("./");
// console.log(`Files: ${files}`);
// console.log(files);

// fs.readdir("./", (err, files) => {
//     if (err) console.log("error", err);
//     else console.log("Result", files);
// });

const Logger = require("./logger");

const logger = new Logger();

logger.on("messageLogged", (arg) => {
    console.log("Listener Called", arg);
});

logger.log("message");

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello world!");
        res.end();
    }

    if (req.url === "/api/courses/") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on("connection", (socket) => {
    console.log("New connection");
});

const PORT = 3000;
server.listen(PORT);

console.log(`Listening on port ${PORT}...`);
