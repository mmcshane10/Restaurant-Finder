$(document).ready(function() {

  $(".start").click(function() {
    $(".Q1").show();
    $(".start").hide();
  });

  $(".btn1").click(function() {
    $(".Q2").show();
    $(".btn1").hide();
    $(".Q1").hide();
  });

  $(".btn2").click(function() {
    $(".Q3").show();
    $(".btn2").hide();
    $(".Q2").hide();
  });

  $(".btn3").click(function() {
    $(".Q4").show();
    $(".btn3").hide();
    $(".Q3").hide();
  });

  $(".btn4").click(function() {
    $(".Q5").show();
    $(".btn4").hide();
    $(".Q4").hide();
  });

});
