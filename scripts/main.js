$( function() {
    var availableTags = [
      "Norge, Gardermoen",
      "Norge, Torp",
      "Norge, Rygge",
      "Spania, Madrid",
      "Spania, Barcelona",
      "USA, JFK",
      "USA, LAX ",
      "USA, O'Hare International Airport",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( ".autoComplete" ).autocomplete({
      source: availableTags
    });
  } );
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
