

const fs = require("fs");

// Modifica el texto del archivo.txt


fs.readFile("archivo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});