
document.addEventListener("DOMContentLoaded", function () {

 
});

function CriadorDeMensagem() {

    console.log('entrou')

    var radios = document.getElementsByName("rdmensagens");
    var nome = document.getElementById("inputNome").textContent;
    var opcao = null;
    var texto = null;

    for (var i = 0; i < radios.length; i++) {

      if (radios[i].checked) {

        console.log(radios[i].value);
        opcao = radios[i].value;
        break;
      }
    }
    if (opcao == "vaga") {
      console.log("opção escolhida foi vaga");
      //texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeVaga();
    }
    else if (opcao == "remarcacao") {
      console.log("opção escolhida foi remarcacao");
    }
    else {
      console.log("opção escolhida foi avisos");
    }

    return texto;
  }


function CriacaoDaMensagemDeVaga(){

    var texto = null;
    var nome = documentt.getElementById("inputNome").textContent;
    var dataPorExtenso = documentt.getElementById("lblDataExtensoTexto").textContent;

    texto = "*Olá,"+ nome +", você foi marcado(a) para o dia" +  dataPorExtenso, + "terça, às 11h (horário de Brasília - Brasil)*!";
    return texto;

}

function TrocaDeOpcao(){

}

function CriadorDeMensagem()
{

    // event.preventDefault()
    // console.log("Botão Clicado!")
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