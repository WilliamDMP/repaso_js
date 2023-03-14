const main = () => {
    const formulario = document.getElementById('todo-list')
    formulario.onsubmit = (e) => {
        e.preventDefault()
        const campo = document.getElementById('campoTexto')
        campoTexto = campo.value
        campoTexto.value = ''
        console.log(campoTexto)
        
    } 
}