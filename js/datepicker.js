$(function () {

    //var $j = jQuery.noConflict();
    //$j("#datepicker").datepicker();
    $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
    $("#datepicker_data_consulta").datepicker({ dateFormat: 'dd/mm/yy' });
    $('#btnFormatar').click(formatar);
    $('#btnFormatar_data_consulta').click(formatarDataRemarcada);
});

function formatar() {
    var data = $('#datepicker').datepicker('getDate');
    var extenso;

    data = new Date(data);

    var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][data.getDay()];
    var date = data.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();
   
    // $('#lblDataExtenso').html(`${day}, ${date} de ${month} de ${year}`);

    $('#lblDataExtensoTexto').html(`${day}, ${date} de ${month}`); 
    
}

function formatarDataRemarcada(){

    var data = $('#datepicker_data_consulta').datepicker('getDate');
    var extenso;

    data = new Date(data);

    var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][data.getDay()];
    var date = data.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();

    $('#lblDataExtensoTextoDataPrazo').html(`${day}, ${date} de ${month}`);
   
}