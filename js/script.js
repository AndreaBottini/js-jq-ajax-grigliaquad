// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

// Inizializzo il documento
$(document).ready(function () {
  // Ad ogni click del quadrato deve partire una richiesta AJAX per prendere un numero da 1 a 9. Quando mi viene fornito un risultato, devo effettuare un confronto per capire se il numero è minore di 5 o maggiore di 5. Se minore di 5 il quadrato diventerà giallo, se maggiore di 5 diventerà verde.
  $('.quadrato').click(function () {
    // console.log('provaClick');
    var selezione = $(this);
    $.ajax( {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (datoDelClick, stato) {
        gioco(datoDelClick.response);
        console.log(datoDelClick.response);
      },
      error: function (datoDelClick, stato) {
        alert("E' avvenuto un errore.");
      }
    }
  );
  //Effettuo il confronto
  function gioco(risultato) {
    if (risultato <= 5) {
      selezione.addClass('yellow');
    } else {
      selezione.addClass('green');
    }
    selezione.text(risultato)
  }
});



});
