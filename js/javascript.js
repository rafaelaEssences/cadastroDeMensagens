
document.addEventListener("DOMContentLoaded", function () {

 
});




function EscolhaOpcao() {

    var radios = document.getElementsByName("rdmensagens");
    var nome = document.getElementById("inputNome").textContent;

    for (var i = 0; i < radios.length; i++) {
        
        if (radios[i].checked) {
            
            console.log(radios[i].value);
            
            break;
        }
    }
}

function CriadorDeMensagem()
{
    console.log("Botão Clicado!")
    // event.preventDefault()
    // console.log("Botão Clicado!")
}

function ComboHoras(){

}

function buildTimePicker() {
    var result = document.createElement('span');
    var hours = document.createElement('select');
    hours.setAttribute('id', 'hour');
    for (var h=1; h<13; h++) {
        var option = document.createElement('option');
        option.setAttribute('value', h);
        option.appendChild(document.createTextNode(h + 'h'));
        hours.appendChild(option);
    }
    var minutes = document.createElement('select');
    minutes.setAttribute('id', 'minute');
    for (var m=0; m<60; m++) {
        var option = document.createElement('option');
        option.setAttribute('value', m);
        option.appendChild(document.createTextNode(m + 'm'));
        minutes.appendChild(option);
    }
    result.appendChild(hours);
    result.appendChild(document.createTextNode(" : "));
    result.appendChild(minutes);

    return result;
}