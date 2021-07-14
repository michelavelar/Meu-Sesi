// FUNÇAO PARA FAVORITAR ITENS PARA O TOPO DA LISTA
$(document).ready( function() {
    
    $('#main span.pin').live('click', function() {
        $(this).closest('.app').prependTo('#pinned');
    });
    $('#pinned span.pin').live('click', function() {
        $(this).closest('.app').prependTo('#main');
    });
    
});

