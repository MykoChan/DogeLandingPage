const EventEmitter = require("events");

const url = "test.io/log";

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        // Raise an event
        this.emit("messageLogged", {
            id: 1,
            url: "http://",
        });
    }
}

// module.exports.log = log;
module.exports = Logger;
