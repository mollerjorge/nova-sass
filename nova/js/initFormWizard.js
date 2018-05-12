$('document').ready(function() {


  $('button[type="submit"]').click(function(e) {
    e.preventDefault();

    var activeNav = $('.fw__nav  .active');
    activeNav.addClass('success');
    activeNav.next().addClass('active');
    activeNav.removeClass('active'); 

    
    var targetForm = $(this).attr('data-target');
    $('form.active').animateCss('fadeOutLeft', function() {
      $(targetForm).prev().removeClass('active');
      $(targetForm).attr('class','form animated fadeInRight active');
    });
    

  });

  $('.prev').click(function() {
    var activeNav = $('.fw__nav  .active');
    activeNav.removeClass('active');
    activeNav.prev().addClass('active');
    activeNav.prev().removeClass('success');

    var targetForm = $(this).attr('data-target');
    $('form.active').animateCss('fadeOutRight', function() {
      $(targetForm).next().removeClass('active');
      $(targetForm).attr('class', 'form animated fadeInLeft active');
    });
    
  })


});