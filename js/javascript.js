
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("fieldAvisos").style.display = 'none';
  document.getElementById("fieldRemarcacao").style.display = 'none';
  //document.getElementById('datepicker').style.border = "none";
});



function TrocaDeOpcao() {

  document.getElementById("fieldAvisos").style.display = 'none';

  var radios = document.getElementsByName("rdmensagens");
  var nome = document.getElementById("inputNome").textContent;
  var opcao = null;
  var texto = null;
  document.getElementById('lblDataExtensoTexto').textContent = '';

  for (var i = 0; i < radios.length; i++) {

    if (radios[i].checked) {

      opcao = radios[i].value;
      break;
    }
  }
  if (opcao == "vaga") {
  
    document.getElementById("fieldAvisos").style.display = 'none';
    document.getElementById("fieldRemarcacao").style.display = 'none';
    texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeVaga();
  }
  else if (opcao == "remarcacao") {

    document.getElementById("fieldAvisos").style.display = 'none';
    document.getElementById("fieldRemarcacao").style.display = 'block';

  }
  else if (opcao == "remarcacaoEmCimaDaHora") {

    document.getElementById("fieldAvisos").style.display = 'none';
    document.getElementById("fieldRemarcacao").style.display = 'none'; 
    texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeRemarcacaoEmCimaDaHora();
  }
  else if(opcao == "avisoProvavelVagaPorDesistencia"){

    document.getElementById("fieldAvisos").style.display = 'none';
    document.getElementById("fieldRemarcacao").style.display = 'none';
    texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeAvisoDeProvavelVagaPorDesistencia();

  }
  else if(opcao == "avisoPrazoConfirmacaoConsulta"){

    document.getElementById("fieldAvisos").style.display = 'none';
    document.getElementById("fieldRemarcacao").style.display = 'none';
    texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAvisoPrazoConfirmacaoConsulta();

  }
  else {

    document.getElementById("fieldAvisos").style.display = 'block';
    document.getElementById("fieldRemarcacao").style.display = 'none';
    texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAviso();
  }

  return texto;

}


function GerarTexto() {

  if (document.getElementById('datepicker').value == '') {
    //document.getElementById('datepicker').style.border = "2px solid red";
    $("#modal-mensagem").modal();
  }
  else {

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
      document.getElementById("fieldAvisos").style.display = 'none';
      document.getElementById("fieldRemarcacao").style.display = 'none';

      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeVaga();
    }
    else if (opcao == "remarcacao") {
      document.getElementById("fieldAvisos").style.display = 'none';
      document.getElementById("fieldRemarcacao").style.display = 'block';

      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeRemarcacao();
    }
    else if (opcao == "remarcacaoEmCimaDaHora") {
      document.getElementById("fieldAvisos").style.display = 'none';
      document.getElementById("fieldRemarcacao").style.display = 'none';

      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeRemarcacaoEmCimaDaHora();
    }

    else if(opcao == "avisoProvavelVagaPorDesistencia"){

      document.getElementById("fieldAvisos").style.display = 'none';
      document.getElementById("fieldRemarcacao").style.display = 'none';
      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDaMensagemDeAvisoDeProvavelVagaPorDesistencia();
  
    }

    else if(opcao == "avisoPrazoConfirmacaoConsulta"){

      document.getElementById("fieldAvisos").style.display = 'none';
      document.getElementById("fieldRemarcacao").style.display = 'none';
      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAvisoPrazoConfirmacaoConsulta();
  
    }
    
    else {
      document.getElementById("fieldAvisos").style.display = 'block';
      document.getElementById("fieldRemarcacao").style.display = 'none';

      texto = document.getElementById("textoDaMensagem").textContent = CriacaoDeMensagemDeAviso();
    }

    return texto;
  }
}

function CriacaoDeMensagemDeAvisoPrazoConfirmacaoConsulta(){

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  var dataPorExtenso = document.getElementById('lblDataExtensoTexto').textContent;
  var diaDaSemana = dataPorExtenso.split(',')[0];
  var data = dataPorExtenso.split(',')[1];

   var getHoraPrazo = document.getElementById("selectHorasPrazo");
   var horaPRazo = getHoraPrazo.options[getHoraPrazo.selectedIndex].text;

   var getMinutosPrazo = document.getElementById("selectMinutosPrazo");
   var minutosPrazo = getMinutosPrazo.options[getMinutosPrazo.selectedIndex].text;

  var dataPorExtensoPrazo = document.getElementById('lblDataExtensoTextoDataPrazo').textContent;
  var diaDaSemanaPrazo = dataPorExtensoPrazo.split(',')[0];
  var dataPrazo = dataPorExtensoPrazo.split(',')[1];

  var getHojeOuAmanha = document.getElementById("selectDiasSemana");
  var hojeOuAmanha = getHojeOuAmanha.options[getHojeOuAmanha.selectedIndex].text;

  texto = "Olá, " + nome +"!";
  texto += "\n\n";
  texto += "Vou ter dar o *prazo até o dia de " + hojeOuAmanha + ", " + dataPrazo + ", " + diaDaSemanaPrazo + ", às " + horaPRazo + minutosPrazo + 
  "*, pra confirmar a *consulta do dia de" + data + ", " + diaDaSemana + ", às " + hora + minutos + "*.";
  texto += "\n\n";
  texto += "❗️ *Caso não responda eu colocarei outra pessoa no seu lugar, ok?*";
  texto += "\n\n";
  texto += "Espero que comprrenda.";
  texto += "\n\n";
  texto += "Obrigada!";

  return texto;

}

function CriacaoDaMensagemDeAvisoDeProvavelVagaPorDesistencia(){

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  var dataPorExtenso = document.getElementById('lblDataExtensoTexto').textContent;
  var diaDaSemana = dataPorExtenso.split(',')[0];
  var data = dataPorExtenso.split(',')[1];

  texto = "Olá, " + nome +"!";
  texto += "\n\n";
  texto += "*Há uma grande possibilidade do dia" + data + ", " + diaDaSemana + ", às " + hora + minutos + " (horário de Brasília - Brasil) a pessoa que estava marcada desistir da consulta*.";
  texto += "\n\n";
  texto += "❗️ *Se realmente se confirmar você gostaria de ser atendido(a)?*";
  texto += "\n\n";
  texto += "Aguardo retorno, obrigada!";

  return texto;

}

function CriacaoDeMensagemDeAviso() {

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  // var dataPorExtenso = document.querySelector('span[id="lblDataExtensoTexto"]').textContent;
  var dataPorExtenso = document.getElementById('lblDataExtensoTexto').textContent;
  var diaDaSemana = dataPorExtenso.split(',')[0];
  var data = dataPorExtenso.split(',')[1];

  texto = TextoDeAvisos(diaDaSemana, hora, minutos, data, nome);

  return texto;
}


function CriacaoDeMensagemDeRemarcacao() {

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  //var dataPorExtenso = document.querySelector('label[id="lblDataExtensoTexto"]').textContent;
  var dataPorExtenso = document.getElementById('lblDataExtensoTexto').textContent;
  var diaDaSemana = dataPorExtenso.split(',')[0];
  var data = dataPorExtenso.split(',')[1];

  texto = "*Olá, " + nome + ", você foi remarcado(a) para o dia" + data + ", " + diaDaSemana + ", às " + hora + minutos + " (horário de Brasília - Brasil)*!";

  if (document.querySelector("input[id='chckConfirmacaoDiasAntes']").checked == true) {
    texto += "\n\n";
    texto += "❗️ *Eu sempre confirmo poucos dias antes a consulta pelo whatsapp, por favor, é necessário que fique atento(a)!*"
  }

  if (document.querySelector("input[id='chckPagamentoRemarcacao']").checked == true) {
    texto += "\n\n";
    texto += "☀️ Poderia me confirmar abaixo a forma de pagamento?";
    texto += "\n";
    texto += "1) Pix (pagamento somente no dia).";
    texto += "\n";
    texto += "2) Transferência bancária (no máximo 3 dias úteis antes da consulta).";
    texto += "\n";
    texto += "3) Paypal (só pra quem está fora do Brasil -  2 dias úteis antes da consulta).";
  }
  if (document.querySelector("input[id='chckContinueAdiantandoRemarcacao']").checked == true) {
    texto += "\n\n";
    texto += "❗️ *Obs: Conforme for 'vagando' eu vou te passando pra frente, ok? Habilite as notificações e fique em alerta!*"
  }

  texto += "\n\n";
  texto += "Obrigada!";
  return texto;

}

function CriacaoDaMensagemDeRemarcacaoEmCimaDaHora() {

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  texto = "*Olá, " + nome +"!*";
  texto += "\n\n";
  texto +=  "*A pessoa que seria consultada daqui a pouco às " + hora + minutos + " ainda não entrou em contato*, então há a POSSIBILIDADE de vaga.";
  texto += "\n\n";
  texto += "(Eu sempre dou um prazo de 5 até 10 minutos após o horário marcado pra pessoa aparecer).";
  texto += "\n\n";
  texto += "❗️ *Se realmente a pessoa desistir* você gostaria de ser atendido(a)?";
  texto += "\n\n";
  texto += "Obrigada!";
  return texto;
}


function CriacaoDaMensagemDeVaga() {

  var texto = null;
  var nome = document.querySelector('input[id="inputNome"]').value;

  var getHora = document.getElementById("selectHoras");
  var hora = getHora.options[getHora.selectedIndex].text;

  var getMinutos = document.getElementById("selectMinutos");
  var minutos = getMinutos.options[getMinutos.selectedIndex].text;

  //var dataPorExtenso = document.querySelector('label[id="lblDataExtensoTexto"]').textContent;
  var dataPorExtenso = document.getElementById('lblDataExtensoTexto').textContent;
  var diaDaSemana = dataPorExtenso.split(',')[0];
  var data = dataPorExtenso.split(',')[1];


  texto = "*Olá, " + nome + ", você foi marcado(a) para o dia" + data + ", " + diaDaSemana + ", às " + hora + minutos + " (horário de Brasília - Brasil)*!";
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
  texto += "❗️ *Obs: Conforme for 'vagando' eu vou te passando pra frente, ok? Habilite as notificações e fique em alerta!*"
  texto += "\n\n";
  texto += "Obrigada!";
  return texto;
}


function TextoDeRemarcacao(diaDaSemana, hora, minutos, data, nome) {

  var texto = null;
  texto = "*Olá, " + nome + ", você foi remarcado(a) para o dia" + data + ", " + diaDaSemana + ", às " + hora + minutos + " (horário de Brasília - Brasil)*!";
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
  texto += "❗️ *Obs: Conforme for 'vagando' eu vou te passando pra frente, ok? Habilite as notificações e fique em alerta!*"
  texto += "\n\n";
  texto += "Obrigada!";
  return texto;

}

function TextoDeAvisos(diaDaSemana, hora, minutos, data) {

  var texto = null;
  texto = "Olá!";
  texto += "\n";
  texto += "*Dia " + data + " (" + diaDaSemana + ", às " + hora + minutos + " - horário de Brasília - Brasil) surgiu uma vaga para consulta.*";
  texto += "\n\n";
  texto += "❗️ Você gostaria de adiantar o atendimento?";

  if (document.querySelector("input[id='chckContinueAdiantandoAvisos']").checked == true) {
    texto += "\n\n";
    texto += "❗️ *OBS: conforme for 'vagando' eu vou continuar adiantando, ok?*";
    texto += "\n";
  }
  else {
    texto += "\n\n";
  }
  texto += "❗️ *OBS: por favor, caso você não queira, poderia me informar?*";
  texto += "\n\n";
  texto += "Obrigada!";

  return texto;

}

function TrocarData(){
    if (document.getElementById('datepicker').value == '') {
    document.getElementById('datepicker').style.border = "none";
  }
  else{
    document.getElementById('datepicker').style.border = "2px solid red";
  }
}
