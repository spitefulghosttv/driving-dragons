$(document).ready(function(){
  $('#klaudiaLogIn').show();
    $("#home").hide();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").hide();




  $(".LogIn").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").show();
    $("main").show();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").hide();

  });

  $(".home-image1").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").hide();
    $("main").show();
    $("#product1").show();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").hide();

  });

  $(".home-image2").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").hide();
    $("main").show();
    $("#product1").hide();
    $("#product2").show();
    $("#product3").hide();
    $("#checkout").hide();

  });

  $(".home-image3").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").hide();
    $("main").show();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").show();
    $("#checkout").hide();

  });

  $(".container").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").hide();
    $("main").show();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").show();

  });

  $(".home-link").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").show();
    $("main").show();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").hide();

  });

  $(".basket-link").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").hide();
    $("#home").hide();
    $("main").show();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").show();

  });

  $(".login-link").click(function(e){
    e.preventDefault()
    $("#klaudiaLogIn").show();
    $("#home").hide();
    $("main").hide();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#checkout").hide();

  });

})