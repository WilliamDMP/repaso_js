let angelaGysseth = "novia"
const angysseth = 'Super cansona'

const cansona = {
    nombre: "guayabo",
    edad: 60,
    esCansona: true
}
console.log(angelaGysseth, angysseth, cansona.esCansona, cansona.edad)

let arregloCansona = ["Mi", "Novia", "Es super", "Cansona"]
let arregloArreglado = ["Pero", "La", "Amo", cansona]



arregloCansona.push("Y linda")

console.log(arregloCansona ,arregloArreglado)

let a = 4
let b = 3

if (a > b) {
    console.log("a mayor que b")
}

let evaluaWhile = 6

while (evaluaWhile < 9 && evaluaWhile > 5) {
    console.log("el ciclo funciona", evaluaWhile)
    evaluaWhile++
}


let x = 4

switch (x) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;   
    case 3:
        console.log(3)
    break; 

    default:
        console.log("por defecto")
        break;
}

let unArreglo = [1, 2, 3]

for (let index = 0; index < unArreglo.length; index++) {
    console.log(unArreglo[index]) 
}