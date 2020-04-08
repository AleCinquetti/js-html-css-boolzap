$(document).ready(function() {

    $('.right-footer > #send-msg').click(sendMsg);            // intercetto il click dell'aeroplanino


    $('.right-footer > input').keypress(function(event) {     // intercetto tasto invio sull'input di testo
        if(event.which == 13) {
            sendMsg();
        }
    });


    // FUNZIONE INVIO MESSAGGIO
    function sendMsg() {
        var msgContainer = $('.chat');
        var text = $('.right-footer > input').val();                         //salvo testo scritto da utente

        msgContainer.append('<div class="msg sent">' + text + '</div>');     // inietto testo scritto

        $('.right-footer > input').val('');                         // svuoto input di testo

        setTimeout(recievedMsg, 1000);                              // Imposto timeout function per risposta automatica
    }

    // FUNZIONE RICEZIONE MESSAGGIO
    function recievedMsg() {
        var msgContainer = $('.chat');
        msgContainer.append('<div class="msg recieved">' + 'ok!' + '</div>');   // inietto testo "statico"
    }



    // FUNZIONE RICERCA CONTATTO
    $('#search-contact').keyup(function(event) {
        var searchedLetter = $(this).val().toLowerCase();                        //salvo carattere digitato da utente

        $('.contact').each(function() {                                          //passo in rassegna contatti
            var userName = $(this).find('.contact-name').text().toLowerCase();   //salvo nome contatti

            if(userName.includes(searchedLetter)) {                              //condizioni per lo show
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })

});
