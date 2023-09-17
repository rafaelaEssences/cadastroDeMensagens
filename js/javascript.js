
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

function CriadorDeMensagem(tipoDeMensagem)
{

}