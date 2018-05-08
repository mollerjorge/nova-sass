(function($) {
  $(document).ready(function() {
    // Modal Default From Top
    $("#btn-default").click(function() {
      $("#modal-default").addClass("is-visible");
      $("#modal-default .modal")
        .removeClass("animated bounceInDown bounceOutUp")
        .addClass("animated bounceInDown");
    });

    $("#modal-default").click(function() {
      $("#modal-default .modal").addClass("animated bounceOutUp");
      $("#modal-default").removeClass("is-visible");
    });

    // Modal Default From Bottom
    $("#btn-down").click(function() {
      $("#modal-down").addClass("is-visible");
      $("#modal-down .modal")
        .removeClass("animated bounceInUp bounceOutDown")
        .addClass("animated bounceInUp");
    });

    $("#modal-down").click(function() {
      $("#modal-down .modal").addClass("animated bounceOutDown");
      $("#modal-down").removeClass("is-visible");
    });

    // Modal Default From Right
    $("#btn-right").click(function() {
      $("#modal-right").addClass("is-visible");
      $("#modal-right .modal")
        .removeClass("animated bounceInRight bounceOutRight")
        .addClass("animated bounceInRight");
    });

    $("#modal-right").click(function() {
      $("#modal-right .modal").addClass("animated bounceOutRight");
      $("#modal-right").removeClass("is-visible");
    });

    // Modal Default From Left
    $("#btn-left").click(function() {
      $("#modal-left").addClass("is-visible");
      $("#modal-left .modal")
        .removeClass("animated bounceInleft bounceOutLeft")
        .addClass("animated bounceInLeft");
    });

    $("#modal-left").click(function() {
      $("#modal-left .modal").addClass("animated bounceOutLeft");
      $("#modal-left").removeClass("is-visible");
    });

    // Modal Success
    $("#btn-success").click(function() {
      $("#modal-success").addClass("is-visible");
      $("#modal-success .modal")
        .addClass("animated shake");
    });

    $("#modal-success").click(function() {
      $("#modal-success .modal").removeClass("animated shake");
      $("#modal-success").removeClass("is-visible");
    });

    // Modal Danger
    $("#btn-danger").click(function() {
      $("#modal-danger").addClass("is-visible");
      $("#modal-danger .modal")
        .addClass("animated swing");
    });

    $("#modal-danger").click(function() {
      $("#modal-danger .modal").removeClass("animated swing");
      $("#modal-danger").removeClass("is-visible");
    });

    // Modal Warning
    $("#btn-warning").click(function() {
      $("#modal-warning").addClass("is-visible");
      $("#modal-warning .modal")
        .removeClass("animated lightSpeedIn lightSpeedOut")
        .addClass("animated lightSpeedIn");
    });

    $("#modal-warning").click(function() {
      $("#modal-warning .modal").addClass("animated lightSpeedOut");
      $("#modal-warning").removeClass("is-visible");
    });
  });
})(window.jQuery);
