/* function suma(a, b) {
    console.log(a + b)
}

suma(3, 4)

function suma2(param1, param2) {
    return param1 + param2
}

let guardarSuma2 = suma2(2, 3)

console.log(guardarSuma2) */

// callback

function suma(a, b, callback) {
    const resultado = a + b
    callback(resultado)
}

function callOtravez(resultado) {
    console.log(resultado)
}

suma(1, 2, callOtravez)

const noviaLokis = (a, b) => {
    console.log("Mi novia esta lokis")
    console.log(a + b) 
}

noviaLokis(1, 5)

suma(3, 5, function (resultado) {
    console.log("El resultado es: ", resultado) 
})