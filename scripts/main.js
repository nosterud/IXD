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
  });

$( function() {
    $( "#datepicker" ).datepicker();
});

$("#advance").on("click", function() {
    var $bar = $(".ProgressBar");
    if ($bar.children(".is-current").length > 0) {
        $bar.children(".is-current").removeClass("is-current").addClass("is-complete").next().addClass("is-current");
} else {
        $bar.children().first().addClass("is-current");
    }
});

$("#previous").on("click", function() {
    var $bar = $(".ProgressBar");
    if ($bar.children(".is-current").length > 0) {
        $bar.children(".is-current").removeClass("is-current").prev().removeClass("is-complete").addClass("is-current");
} else {
        $bar.children(".is-complete").last().removeClass("is-complete").addClass("is-current");
    }
});
