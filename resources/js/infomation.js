// sticky header

$(window).scroll(function () {
  const sticky = $(".header-main"),
    scroll = $(window).scrollTop();

  if (scroll >= 10) sticky.addClass("sticky");
  else sticky.removeClass("sticky");
});

let count = 0;

const number = $(".counter");

$(document).ready(function () {
  $(".minus-btn").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus-btn").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
