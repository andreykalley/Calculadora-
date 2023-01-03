function insert(num){
    var numero = window.document.getElementById('tela2').innerHTML
    window.document.getElementById('tela2').innerHTML = numero + num
}

function press(num){
    var numero = window.document.getElementsByClassName('num'+num)[0]
    numero.style.boxShadow = 'none'
}

function loose(num){
    var numero = window.document.getElementsByClassName('num'+num)[0]
    numero.style.boxShadow = '1px 1px 7px'
}

function calculate(){
    var result = window.document.getElementById('tela2').innerHTML

    if(result){
        window.document.getElementById('tela2').innerHTML += ' = '+eval(result)
    }else{
        window.document.getElementById('tela2').innerHTML = '--'
    }
}

function limpar(){
   window.document.getElementById('tela2').innerHTML = ''
}

var enviar = document.getElementById('enviar')



