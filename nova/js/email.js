$(document).ready(function() {
  $(".email__inbox-item").click(function() {
    $(".email__inbox-item").removeClass("email__inbox-item--active");
    $(this).addClass("email__inbox-item--active");

    var imgUrl = $(this)
        .find("img")
        .attr("src"),
      subject = $(this)
        .find(".email__inbox-subject")
        .html(),
      body = $(
        "<p>" +
          $(this)
            .find(".email__inbox-body")
            .html() +
          "</p>"
      ),
      from = $(this)
        .find(".email__inbox-title")
        .html();

    $(".email__photo > img").attr("src", imgUrl);
    $(".email__subject h1").html(subject);
    $(".email__subject > p").html(from + " to George Moller");
    $(".email__body").html(body);
    $(".email__compose-body").animateCss("fadeInRight");

    if ($.Nova.isMobile()) {
      $(".email__inbox").animateCss("fadeOutLeft", function() {
        $(".email__inbox").css("width", "0%");
        $(".email__compose-body").animateCss("animated fadeInRight");
      });
    }
  });

  $(".email__compose-header-icon .pe-7s-drawer").click(function() {
    if ($.Nova.isMobile()) {
      $(".email__compose").animateCss("fadeOutRight", function() {
        $(".email__inbox").animateCss("fadeInLeft");
        $(".email__inbox").css("width", "100%");
      });
    }
  });

  
});
