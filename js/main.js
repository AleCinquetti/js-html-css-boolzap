$(document).ready(function() {

    // dichiaro variabili che vanno a prendere gli elementi html che necessito
    var container = $('.chat');                    // dove deve essere creato il nuovo messaggio
    var send = $('.right-footer > #send-msg');    // "come" deve essere il messaggio"

    // funzione che invia il messaggio al click dell'aeroplano di carta
    send.click(
        function() {
            var text = $('.right-footer > input').val();
            container.append('<div class="msg sent">' + text + '</div>');
        }
    );
});
