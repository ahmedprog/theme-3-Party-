$(document).ready(function() {

  $(".openNav").click(function(event) {
    /* Act on the event */
    $(this).css('margin-left','210px');
    $(".sidenav").width("210px")
  });
  $(".closebtn").click(function(event) {
    /* Act on the event */
    $(".openNav").css('margin-left','10px');
    $(".sidenav").width("0")
  });
  $("#accordion h3").click(function(event) {
    $("#accordion div").fadeOut(500);
    if ($(this).next("div").css("display") == "none" ) {
      $(this).next("div").fadeIn(500);
    }else {
      $(this).next("div").fadeOut(500);
    }
  });

  $("textarea").keyup(function(event) {
    /* Act on the event */
    if($(this).val().length < 100){
      $("#char").text(100-$(this).val().length);
    }else {
      $("#char").text('your available character finished');
    }
  });
// counterdown
  // Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    $("#days").html("<h2>"+ days + " D </h2>");
    $("#hours").html("<h2>"+ hours + " H  </h2>");
    $("#minutes").html("<h2>"+ minutes+ " M</h2>");
    $("#seconds").html("<h2>"+  seconds + " S</h2>");

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        $("#cou").html('<h1>EXPIRED</h1>');
    }
}, 1000);


});
