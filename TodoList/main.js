const arregloTodo = [] 

const main = () => {

    const formulario = document.getElementById('todo-list')
    formulario.onsubmit = (e) => {

        e.preventDefault()
        const campo = document.getElementById('campoTexto')   
        campoTexto = campo.value
        campo.value = ''
        console.log(campoTexto)  
        arregloTodo.push(campoTexto)
        const elementoLista = document.getElementById('elemento-lista')
        elementoLista.innerHTML = ''
        
        for (let index = 0; index < arregloTodo.length; index++) {
            elementoLista.innerHTML = elementoLista.innerHTML + '<li>' + arregloTodo[index] + '</li>' 
        }

    } 
}