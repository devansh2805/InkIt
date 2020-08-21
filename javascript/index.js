var sflag = true

$(window).scroll(function() {
  var hT = $('#scroll-to').offset().top,
      hH = $('#scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (sflag && wS > (hT+hH-wH)){
    numberChange(".s1", 40, "+");
    numberChange(".s2", 60, "%");
    numberChange(".s3", 20, "+");
    sflag = false;
  }
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
