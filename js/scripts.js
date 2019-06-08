$(document).ready(function() {
  var result;

  $(".start").click(function() {
    $(".Q1").show();
    $(".start").hide();
  });

  $(".btn1").click(function() {
    $(".Q1").fadeOut();
    $(".btn1").hide();
    $(".Q2").fadeIn();
  });

  $(".btn2").click(function() {
    $(".Q3").fadeIn();
    $(".btn2").hide();
    $(".Q2").fadeOut();
  });

  $(".btn3").click(function() {
    $(".Q4").fadeIn();
    $(".btn3").hide();
    $(".Q3").fadeOut();
  });

  $(".btn4").click(function() {
    $(".Q5").fadeIn();
    $(".btn4").hide();
    $(".Q4").fadeOut();
  });

  $("form#restaurant").submit(function(event) {
    event.preventDefault();

    var food = $("input:radio[name=type]:checked").val();

    if (food === "Italian") {
      result = ".Italian"
    } else if (food === "Asian") {
      result = ".Asian"
    } else if (food === "American") {
      result = ".American"
    } else if (food === "Other") {
      result = ".Other"
    }

    $(".btn5").hide();
    $(".Q5").hide();
    $(".suggestions").append(result);
    $(".suggestions").show();
    console.log();

    });
  });
