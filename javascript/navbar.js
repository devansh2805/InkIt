$('.navbar-nav .nav-link').click(function() {
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
});
$(window).scroll(
  function() {
    if ($(document).scrollTop() >= 500) {
      $("#navibar").addClass("down");
      $("#navibar").removeClass("up");
      $("#logoimg").addClass("imgdown");
      $("#logoimg").removeClass("imgup");
    } else {
      $("#navibar").addClass("up");
      $("#navibar").removeClass("down");
      $("#logoimg").addClass("imgup");
      $("#logoimg").removeClass("imgdown");
    }
  }
);
