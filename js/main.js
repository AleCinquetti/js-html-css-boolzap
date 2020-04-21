$(document).ready(function() {

    $('.right-footer > #send-msg').click(sendMsg);            // intercetto il click dell'aeroplanino

    $('.right-footer > input').keypress(function(event) {     // intercetto tasto invio sull'input di testo
        if(event.which == 13) {
            sendMsg();
        }
    });

    $('.contact').click(currentConversation);


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


    // FUNZIONE CONVERSAZIONE SELEZIONATA
    function currentConversation() {

        var clickedUser = $(this).index();
        var chatList = $('.chat-wrapper > div');

        chatList.removeClass("active-chat");
        $(this).addClass("active");

        $('.contact').not(this).removeClass("active");
        chatList.eq(clickedUser).addClass("active-chat");

        var userName = $(this).find('.contact-name').text();
        $('#name').text(userName);

        var userImg = $(this).find('.contact-img').html();
        $('.header-img').html(userImg);

        $('.contact').removeClass('active');
        $(this).addClass('active');



    }

    $('.chat').on("click", ".message-info > #canc",
        function () {
            $(this).closest('.msg').remove();
    })

    $('.chat').on("click", ".msg i",
        function () {
            $(this).siblings().toggleClass("message-info");
    })

});
