$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".radian").css({
    transform: "translate(0px, " + wScroll / 15 + "%)",
  });
  $(".index-agent").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });
});
