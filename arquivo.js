
function adicionarCaracter(caracter){
    const inputValor = document.querySelector(".input-number").value
    
    document.querySelector(".input-number").value = inputValor + caracter
    
}

function limparTela(){

    document.querySelector(".input-number").value = ""
}

function calcularValor(){
   const inputValor = document.querySelector(".input-number").value

   document.querySelector(".input-number").value = eval(inputValor)

}

