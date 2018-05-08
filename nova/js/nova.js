(function($) {
  var Nova = function() {
    this.VERSION = "1.0";
    this.AUTHOR = "George Moller";
  };

  Nova.prototype.injectSidebar = function() {
    //var sidebar = ' <div class="sidebar__header"> <img src="nova/img/nova-logo.svg" class="sidebar__header-logo"/> <input id="sidebar-toggle" class="sidebar-toggle" type="checkbox"/> <label class="sidebar__header-button" for="sidebar-toggle"> <span></span> </label> </div><div class="sidebar__menu"> <ul class="sidebar__menu-items"> <li> <a href="" class="sidebar__menu-items-link ">Server <span class="sidebar__menu-items-icon"> <i class="pe-7s-server"></i> </span> </a> </li><li> <a href="" class="sidebar__menu-items-link ">UI Elements <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> <i class="pe-7s-diamond"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="inputs.html" class="sidebar__menu-items-link ">Inputs <span class="sidebar__menu-items-icon"> Ip </span> </a> </li><li> <a href="" class="sidebar__menu-items-link">Buttons <span class="sidebar__menu-items-icon"> Bt </span> </a> </li></ul> </li></ul> </div>';
    $.get('../../sidebar-component.html', function(data) {
      
      $(".sidebar").html(data);
      $.Nova.initSidebar();
    });
  };

  Nova.prototype.injectNavbar = function() {
    var navbar =
      '<nav class="nav"> <div class="nav__menu"> <div class="nav__menu-icon"> <span></span> </div></div><div class="nav__logo"> <img src="./nova/img/nova-logo.svg" alt="logo nova nav"/> </div><div class="nav__search-box"> <form class="form" action=""> <div class="form--group"> <div class="form__input"> <input type="text" placeholder="Begin typing to search anything!" class="form__control form__control--icon search"> <span class="pe-7s-search"></span> </div></div></form> </div><div class="nav__profile"> <div class="nav__profile-notifications"> <div class="nav__profile-icon"> <span class="pe-7s-bell"></span> </div><div class="nav__profile-icon"> <span class="pe-7s-mail"></span> </div><div class="nav__profile-icon"> <span class="pe-7s-drawer"> <div class="badge danger"> <span>4</span> </div></span> </div></div><div class="nav__profile-user"> <figure class="nav__profile-shape"> <img src="./nova/img/profile-woman.jpg" alt="profile picture"/> </figure> <a class="nav__profile-link" href="#"> John Smith</a> <span class="pe-7s-angle-down"></span> </div></div></nav>';
    $(".page-container").prepend(navbar);
  };

  Nova.prototype.initSidebar = function() {
    $(".sidebar__header-button").click(function() {
      $(".sidebar").toggleClass("visible");
    });

    
    $(".sidebar__menu-items-link ").click(function(e) {
      
      if ($(this).next().hasClass('sidebar__sub-menu')) {
        // This link has a sub menu hence we prevent default
        e.preventDefault();
      }

      $(".sidebar__menu-items-link").removeClass("active");
      $(this).addClass("active");
    });
  };

  Nova.prototype.init = function() {
    this.injectSidebar();
    this.injectNavbar();
    
  };

  $.Nova = new Nova();
})(window.jQuery);

(function($) {
  $(document).ready(function() {
    $.Nova.init();
  });
})(window.jQuery);
