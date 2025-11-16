$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>').text(tarefaNova);

        $(novoItem).appendTo('#lista-tarefas').fadeIn(300);

        $('#tarefa-nova').val('');
    });

    $('#lista-tarefas').on('click', 'li', function () {

        if ($(this).css('text-decoration').includes('line-through')) {
            $(this).css('text-decoration', 'none');
        } else {
            $(this).css('text-decoration', 'line-through');
        }
    });
});
