
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("fieldAvisos").style.display = 'none';

});


function TrocaDeOpcao(){

    document.getElementById("fieldAvisos").style.display = 'none';
    

    var radios = document.getElementsByName("rdmensagens");
    var nome = document.getElementById("inputNome").textContent;
    var opcao = null;
    var texto = null;

    for (var i = 0; i < radios.length; i++) {

      if (radios[i].checked) {


        opcao = radios[i].value;
        break;
      }
    }
    if (opcao == "vaga") {
      //console.log("opção escolhida foi vaga");
      //document.getElementById("textoDaMensagem").value  = "";
      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeVaga();
    }
    else if (opcao == "remarcacao") {
      //console.log("opção escolhida foi remarcacao");
    }
    else {
       //console.log("opção escolhida foi vaga");
       //document.getElementById("textoDaMensagem").value  = "";
       document.getElementById("fieldAvisos").style.display = 'block';
       texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAviso();
    }

    return texto;

}


function CriadorDeMensagem() {

    //console.log('entrou')

    var radios = document.getElementsByName("rdmensagens");
    var nome = document.getElementById("inputNome").textContent;
    var opcao = null;
    var texto = null;

    for (var i = 0; i < radios.length; i++) {

      if (radios[i].checked) {


        opcao = radios[i].value;
        break;
      }
    }
    if (opcao == "vaga") {
      //console.log("opção escolhida foi vaga");

      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeVaga();
    }
    else if (opcao == "remarcacao") {
      //console.log("opção escolhida foi remarcacao");
    }
    else {
       
       document.getElementById("fieldAvisos").style.display = 'block';
       texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAviso();
    }

    return texto;
  }


  function CriacaoDaMensagemDeVaga() {

    var texto = null;
    var nome = document.querySelector('input[id="inputNome"]').value;
    
    var getHora = document.getElementById("selectHoras");
    var hora = getHora.options[getHora.selectedIndex].text;

    var dataPorExtenso = document.querySelector('label[id="lblDataExtensoTexto"]').textContent;
    var diaDaSemana =  dataPorExtenso.split(',')[0];
    var data =  dataPorExtenso.split(',')[1];


    texto = "*Olá, " + nome + ", você foi marcado(a) para o dia" + data + ", " + diaDaSemana + ", às " + hora + " (horário de Brasília - Brasil)*!";
    texto += "\n\n";
    texto += "❗️ *Eu sempre confirmo poucos dias antes a consulta pelo whatsapp, por favor, é necessário que fique atento(a)!*"
    texto += "\n\n";
    texto += "☀️ Poderia me confirmar abaixo a forma de pagamento?";
    texto += "\n";
    texto += "1) Pix (pagamento somente no dia).";
    texto += "\n";
    texto += "2) Transferência bancária (no máximo 3 dias úteis antes da consulta).";
    texto += "\n";
    texto += "3) Paypal (só pra quem está fora do Brasil -  2 dias úteis antes da consulta).";
    texto += "\n\n";
    texto+= "❗️ *Obs: Conforme for 'vagando' eu vou te passando pra frente, ok? Habilite as notificações e fique em alerta!*"
    texto += "\n\n";
    texto += "Obrigada!";
    return texto;
  }

  function CriacaoDeMensagemDeAviso() {

    var texto = null;
    var nome = document.querySelector('input[id="inputNome"]').value;
    
    var getHora = document.getElementById("selectHoras");
    var hora = getHora.options[getHora.selectedIndex].text;

    var dataPorExtenso = document.querySelector('label[id="lblDataExtensoTexto"]').textContent;
    var diaDaSemana =  dataPorExtenso.split(',')[0];
    var data =  dataPorExtenso.split(',')[1];

    console.log("opção escolhida foi avisos2");

    texto = "Olá!";
    texto += "\n";
    texto += "*Dia " + data +" ("+ diaDaSemana  + ", às " +  hora  +" - horário de Brasília - Brasil) surgiu uma vaga para consulta.*";
    texto += "\n\n";
    texto += "❗️ Você gostaria de adiantar o atendimento?";

    if(document.querySelector("input[id='chckContinueAdiantando']").checked == true){
        texto += "\n\n";
        texto += "❗️ *OBS: conforme for 'vagando' eu vou continuar adiantando, ok?*";
        texto += "\n";
    }
    else{
        texto += "\n\n"; 
    }
    texto += "❗️ *OBS: por favor, caso você não queira, poderia me informar?*";
    texto += "\n\n";
    texto += "Obrigada!";
   
    return texto;
  }

  function Limpar(){

  }

  /* input dinamico */

//   function buildTimePicker() {
//     var result = document.createElement('span');
//     var hours = document.createElement('select');
//     hours.setAttribute('id', 'hour');
//     for (var h=1; h<13; h++) {
//         var option = document.createElement('option');
//         option.setAttribute('value', h);
//         option.appendChild(document.createTextNode(h + 'h'));
//         hours.appendChild(option);
//     }
//     var minutes = document.createElement('select');
//     minutes.setAttribute('id', 'minute');
//     for (var m=0; m<60; m++) {
//         var option = document.createElement('option');
//         option.setAttribute('value', m);
//         option.appendChild(document.createTextNode(m + 'm'));
//         minutes.appendChild(option);
//     }
//     result.appendChild(hours);
//     result.appendChild(document.createTextNode(" : "));
//     result.appendChild(minutes);

//     return result;
// }

// document.body.appendChild(buildTimePicker());