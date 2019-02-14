/*let base = 2; 
for(let i = 1; i<=10; i++ ){
    console.log( `${base} * ${i}  = ${base * i}`)
}  */

let listarTabla = (base, limite) => {
    
    for(let i = 1; i<= limite; i++ ){
        console.log( `${base} * ${i}  = ${base * i}`)
    }
}  

console.log(listarTabla(2,10));