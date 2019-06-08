$(document).ready(function() {

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

  $(".btn5").click(function() {
    $(".btn5").hide();
    $(".Q5").hide();
    $(result).show();

    var type = $("input:radio[name=type]:checked").val();
    var result;

    if (type === "Italian") {
      result = ".Italian"
    } else if (type === "Asian") {
      result = ".Asian"
    } else if (type === "American") {
      result = ".American"
    } else if (type === "Other") {
      result = ".Other"
    }

    console.log();
  });
});
