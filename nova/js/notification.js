$(document).ready(function() {
  $("select").select2({
    theme: "classic",
    placeholder: "Start typing!"
  });

  $("#type").change(function() {
    var type = $(this).val();

    if (type === "bar") {
      var options =
        '<option value="bottom">Bottom</option><option value="top">Top</option>';

      $("#position option").remove();
      $("#position").append(options);
      $("#position").select2({ theme: "classic" });
    } else if (type === "simple" || type === "image") {
      var options =
        '<option value="top-right">Top Right</option>' +
        '<option value="top-left">Top Left</option>' +
        '<option value="bottom-left">Bottom Left</option>' +
        '<option value="bottom-right">Bottom Right</option>';

      $("#position option").remove();
      $("#position").append(options);
      $("#position").select2({ theme: "classic" });
    }
  });

  $(".position").click(function(e) {
    e.preventDefault();
    $(".position").removeAttr("style");
    $(this).attr("style", "background-color: #EBEBEB");
  });

  $("#showNotif").click(function(e) {
    e.preventDefault();

    var type = $("#type").val(),
      style = $("#style").val(),
      position = $("#position").val(),
      message = $("#message").val(),
      timeOut = $('#timeout').val(),
      animationIn = $('#animationIn').val(),
      animationOut = $('#animationOut').val();


    $(".page-container__wrapper").notify({
      message: message != "" ? message : " This is a default message!",
      style: style,
      position: position,
      type: type,
      timeOut: timeOut,
      animationIn: animationIn,
      animationOut: animationOut
    });
  });
});
