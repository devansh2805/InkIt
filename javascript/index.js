$(document).on("load", function() {
  $(".s1").html("0");
  $(".s2").html("0%");
  $(".s3").html("0");
});

if($(".s1").is(":visible")) {

  numberChange(".s1", 40, "+");
}
if($(".s2").is(":visible")) {

  numberChange(".s2", 60, "%");
}
if($(".s3").is(":visible")) {
  numberChange(".s3", 20, "+");
}
$.stellar({
  horizontalScrolling: false,
  responsive: true
});
function numberChange(element, value, endString) {
  var ticks = 20, speed = 100, x = 0;
  var randomNumbers = [value];
  for(var i=0;i<ticks-1;i++) {
    randomNumbers.unshift(Math.floor(Math.random()*(value+1)));
  }
  randomNumbers.sort((a, b) => {return a - b});
  var interval = window.setInterval(function () {
    $(element).html(randomNumbers.shift() + endString);
    if(++x === ticks) {
      window.clearInterval(interval);
    }
  }, speed);
}
