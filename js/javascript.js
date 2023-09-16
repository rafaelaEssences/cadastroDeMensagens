
document.addEventListener("DOMContentLoaded", function () {

    //var rad = document.querySelectorAll('input[type=radio]');
    //console.log(rad);

});

function EscolhaOpcao() {

    var radios = document.getElementsByName("rdmensagens");

    for (var i = 0; i < radios.length; i++) {
        
        if (radios[i].checked) {
            
            console.log(radios[i].value);
            
            break;
        }
    }
}

function CriadorDeMensagem(tipoDeMensagem)
{

}