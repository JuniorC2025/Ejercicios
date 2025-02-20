

const fs = require("fs");

// usar el metodo writefile para escribir archivos
// fs.writefile(file, data[, option], callback)

fs.writeFile("archivo.txt", "texto-contenido del archivo", (err)=>{
    if(err)throw err;
    console.log("El archivo se ha creado");
});