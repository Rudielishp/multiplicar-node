const fs = require('fs');

let CrearArchivo = (base,limite=10) => {
 return new Promise((resolve, reject)=>{
    if(!Number(base)){
        reject (`la ${base} introducida no es un numero`);
        return;
    }
    let Data = '';
    for(let i = 1; i<=limite; i++ ){
         Data += `${base} * ${i}  = ${base * i}\n`;
    }  
    
    fs.writeFile(`Tablas/Tabla-${base}-al-${limite}.txt`,Data,(err) => {
        if(err) reject(err)
        else
        resolve (`Tabla-${base}-al-${limite}.txt`)
    });

 });
} 
let listarTabla = (base, limite=10) => {
    
    for(let i = 1; i<= limite; i++ ){
        console.log( `${base} * ${i}  = ${base * i}`)
    }
}  
module.exports = {
    CrearArchivo,
    listarTabla
}