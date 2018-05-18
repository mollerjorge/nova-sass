$(document).ready(function() {
  $.Nova.initSkroll();

  // Init Selects
  $("select").select2({
    theme: "classic",
    placeholder: "Start typing!"
  });

  // Init animations table
  $("#animations").DataTable({
    bLengthChange: false,
    responsive: true
  });

  $("#showModal").click(function(e) {
    e.preventDefault();
    var style = $("#style").val(),
      animationIn = $("#animationIn").val(),
      animationOut = $("#animationOut").val();

    if (style === "success") {
      var myModal = $("#modal-success").modal({
        style: "success",
        animationIn: animationIn,
        animationOut: animationOut
      });
      myModal.show();
    } else if (style === "warning") {
      var myModal = $("#modal-warning").modal({
        style: "warning",
        animationIn: animationIn,
        animationOut: animationOut
      });
      myModal.show();
    } else if (style === "danger") {
      var myModal = $("#modal-danger").modal({
        style: "danger",
        animationIn: animationIn,
        animationOut: animationOut
      });
      myModal.show();
    } else {
      var myModal = $("#modal-default").modal({
        style: "default",
        animationIn: animationIn,
        animationOut: animationOut
      });
      myModal.show();
    }
  });
});
