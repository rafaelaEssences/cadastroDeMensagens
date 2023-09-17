$(function () {

    //var $j = jQuery.noConflict();
    //$j("#datepicker").datepicker();
    $("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
    $('#btnFormatar').click(formatar);
});

function formatar() {
    var data = $('#datepicker').datepicker('getDate');
    var extenso;

    data = new Date(data);

    var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][data.getDay()];
    var date = data.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();

    //console.log(data);

    // $('#lblDataExtenso').html(`${day}, ${date} de ${month} de ${year}`);

    //$('#lblDataExtensoTexto').html(`${date} de ${month}`);

    $('#lblDataExtensoTexto').html(`${day}, ${date} de ${month}`);
    
}
