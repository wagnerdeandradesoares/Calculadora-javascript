// Selecionando os elementos HTML que serão manipulados no script
const btn = document.querySelector('.btn')          // Botão principal (para confirmar a operação)
const opcoes = document.querySelector('.opcoes')    // Elemento de opções (onde os botões de operação estão)
const input = document.querySelector('.input0')    // Caixa de entrada que aparece ao selecionar uma operação
const title = document.getElementById('title')     // Título principal da página ou área
const p = document.querySelector('.p')              // Parágrafo onde o símbolo da operação será exibido
const btnsoma = document.querySelector('.btnsoma')   // Botão de soma
const btndiminui = document.querySelector('.btndiminui') // Botão de subtração
const btnmult = document.querySelector('.btnmult')  // Botão de multiplicação
const btndivide = document.querySelector('.btndivide') // Botão de divisão
const btnvoltar = document.querySelector('.btnvoltar') //Seta voltar


let operacaoSelecionada = ''  // Variável para armazenar a operação selecionada
// Função para configurar a operação (alterar título, mostrar botões e configurar o símbolo da operação)
function configurarOperacao(operacao, simbulo, result) {
    operacaoSelecionada = operacao;  // Armazena a operação selecionada
    
    title.innerHTML = `${operacao} dois números:`  // Atualiza o título para a operação selecionada
    opcoes.style.display = "none"                    // Esconde a área de opções (onde estão os botões)
    btn.style.display = "flex"                    // Exibe o botão principal para executar a operação
    btn.innerHTML = result                         // Altera o texto do botão principal (exibe o nome da operação)
    p.innerHTML = simbulo                          // Atualiza o parágrafo com o símbolo da operação (ex: +, -, x, /)
    input.style.display = "flex"                     // Exibe o campo de entrada de números
    btnvoltar.style.display = "flex"
    

}

// Adicionando os event listeners aos botões de operação
btnsoma.addEventListener('click', () => configurarOperacao('Some', '+', 'Somar'));  // Quando clicar no botão de soma, configura a operação de soma
btndiminui.addEventListener('click', () => configurarOperacao('Subtraia', '-', 'Subtrair'));  // Configura a operação de subtração
btnmult.addEventListener('click', () => configurarOperacao('Multiplique', 'x', 'Multiplicar'));  // Configura a operação de multiplicação
btndivide.addEventListener('click', () => configurarOperacao('Divida', '/', 'Dividir'))  // Configura a operação de divisão



//função para dar refresh na tela e voltar
btnvoltar.onclick = function(){
    location.reload()
}


// Função para calcular a operação selecionada
function calcularOperacao() {
    
    const input1 = Number(document.querySelector('.input1').value)  // Converte o valor de input1 para número
    const input2 = Number(document.querySelector('.input2').value)  // Converte o valor de input2 para número
    const resultado = document.querySelector('.resultp')    // Seleciona o elemento onde será mostrado o resultado

    let s     
    let r                                                      // Variável que armazenará o resultado da operação

    // Verifica se os valores de entrada são números válidos
    if (isNaN(input1) || isNaN(input2)) {
        
        resultado.innerHTML = 'Por favor, insira números válidos em ambos os campos!'
        resultado.style.color = "red"
        
        return // Se algum valor não for válido, retorna sem calcular
    }

    // Estrutura de controle (switch) para determinar qual operação executar
    switch(operacaoSelecionada) {
        case 'Some':      // Se a operação for 'Some'
            s = input1 + input2 // Realiza a soma
            r = 'soma' 
            resultado.style.color = "white"
            break            
        case 'Subtraia':  // Se a operação for 'Subtraia'
            s = input1 - input2 // Realiza a subtração
            r = 'subtração'
            resultado.style.color = "white"
            break;
        case 'Multiplique': // Se a operação for 'Multiplique'
            s = input1 * input2 // Realiza a multiplicação
            r = 'multiplicação'
            resultado.style.color = "white"
            break;
        case 'Divida':    // Se a operação for 'Divida'
            if (input2 === 0) {  // Verifica se o divisor é zero
                resultado.innerHTML = 'Não é possível dividir por zero!'
                resultado.style.color = "red"
                return // Retorna sem fazer a operação
            }
            s = input1 / input2 // Realiza a divisão
            r = 'divisão'
            resultado.style.color = "white"
            break
    }

    // Exibe o resultado da operação no HTML
    resultado.innerHTML = `O resultado da ${r} entre ${input1} e ${input2} é: ${s}`

    // Limpa os valores dos inputs
    document.querySelector('.input1').value = ''
    document.querySelector('.input2').value = ''
}

// Enviar dados ao apertar o botão
btn.addEventListener('click', calcularOperacao); // O nome da operação é obtido da variável `operacaoSelecionada`

// Adicionando listeners para o Enter nos campos de input
enviarComEnter(document.querySelector('.input1'), operacaoSelecionada)
enviarComEnter(document.querySelector('.input2'), operacaoSelecionada)

// Função para enviar a operação ao apertar a tecla Enter nos inputs
function enviarComEnter(inputElement, operacao) {
    inputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            calcularOperacao()  // Chama a função calcularOperacao com a operação selecionada
        }
    })
}


























/*const btn = document.querySelector('.btn')
const opcoes = document.querySelector('.opcoes')
const input = document.querySelector('.input0')
const title = document.getElementById ('title')
const btnsoma = document.querySelector('.btnsoma')
const btndiminui = document.querySelector('.btndiminui')
const btnmult = document.querySelector('.btnmult')
const btndivide = document.querySelector('.btndivide')

btnsoma.onclick = function(){
    title.innerHTML = 'Some dois números:'
    opcoes.style.display = "none"
    btn.style.display = "inline"
    input.style.display = "flex"
}

btndiminui.onclick = function(){

    title.innerHTML = 'Subtraia dois números:'
    opcoes.style.display = "none"
    btn.style.display = "inline"
    input.style.display = "flex"
}
btnmult.onclick = function(){

    title.innerHTML = 'Multiplique dois números:'
    opcoes.style.display = "none"
    btn.style.display = "inline"
    input.style.display = "flex"
}
btndivide.onclick = function(){

    title.innerHTML = 'Divida dois números:'
    opcoes.style.display = "none"
    btn.style.display = "inline"
    input.style.display = "flex"
}


 function calcularSoma(){
    var input1 = Number(document.querySelector('.input1').value)
    var input2 = Number(document.querySelector('.input2').value)
    var resultado = document.querySelector('.resultado')
    var s = input1 + input2

    resultado.innerHTML = `A soma dos números ${input1} + ${input2} é igual a: ${s}`

    document.querySelector('.input1').value = ''
    document.querySelector('.input2').value = ''

}

    //Enviar os dados depois de apertar a tecla Enter
    btn.onclick = calcularSoma

    document.querySelector('.input1').addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            calcularSoma()
        }
    })

    document.querySelector('.input2').addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            calcularSoma()
        }
    })*/


/*
btn.onclick = function(){
    var n1 = Number(prompt('Digite um número:'))
    var n2 = Number(prompt('Digite outro número:'))
    var s = n1+n2 
    alert(`A soma entre os número ${n1} + ${n2} é igual a: ${s}`)

}
*/

/*var n1 = Number(prompt("Digite um númerio"))
var n2 = Number(prompt("Digite outro número"))

var s = n1 + n2 

alert(`Soma dos número ${n1} + ${n2} é igual a: ${s}`)
*/


//selecionar o botão pela class
//Usando addEventListener e o método querySelector:
/*
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    alert('botão clicado!!')
})
*/

//Usando a propriedade onclick:





