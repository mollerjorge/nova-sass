(function($) {
  var Nova = function() {
    this.VERSION = "1.0";
    this.AUTHOR = "George Moller";
  };

  Nova.prototype.injectSidebar = function() {
    //var sidebar = ' <div class="sidebar__header"> <img src="nova/img/nova-logo.svg" class="sidebar__header-logo"/> <input id="sidebar-toggle" class="sidebar-toggle" type="checkbox"/> <label class="sidebar__header-button" for="sidebar-toggle"> <span></span> </label> </div><div class="sidebar__menu"> <ul class="sidebar__menu-items"> <li> <a href="" class="sidebar__menu-items-link ">Server <span class="sidebar__menu-items-icon"> <i class="pe-7s-server"></i> </span> </a> </li><li> <a href="" class="sidebar__menu-items-link ">UI Elements <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> <i class="pe-7s-diamond"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="inputs.html" class="sidebar__menu-items-link ">Inputs <span class="sidebar__menu-items-icon"> Ip </span> </a> </li><li> <a href="" class="sidebar__menu-items-link">Buttons <span class="sidebar__menu-items-icon"> Bt </span> </a> </li></ul> </li></ul> </div>';
    $.get("../../sidebar-component.html", function(data) {
      $(".sidebar").html(data);
      $.Nova.initSidebar();
    });
  };

  Nova.prototype.injectNavbar = function() {
    var navbar =
      '<nav class="nav"> <div class="nav__menu"> <div class="nav__menu-icon"> <span></span> </div></div><div class="nav__logo"> <img src="./nova/img/nova-logo.svg" alt="logo nova nav"/> </div><div class="nav__search-box"> <form class="form" action=""> <div class="form--group"> <div class="form__input"> <input type="text" placeholder="Begin typing to search anything!" class="form__control form__control--icon search"> <span class="pe-7s-search"></span> </div></div></form> </div><div class="nav__profile"> <div class="nav__profile-notifications"> <div class="nav__profile-icon"> <span class="pe-7s-bell"><div class="badge info"> <span>10</span> </div></span> </div><div class="nav__profile-icon"> <span class="pe-7s-mail"><div class="badge warning"> <span>8</span> </div></span> </div><div class="nav__profile-icon"> <span class="pe-7s-drawer"> <div class="badge danger"> <span>4</span> </div></span> </div></div><div class="nav__profile-user"> <figure class="nav__profile-shape"> <img src="./nova/img/profile-woman.jpg" alt="profile picture"/> </figure> <a class="nav__profile-link" href="#"> John Smith</a> <span class="pe-7s-angle-down"></span> </div></div></nav>';
    $(".page-container").prepend(navbar);
  };

  Nova.prototype.initSidebar = function() {
    
    // Handler for hamburger menu in sidebar that toggles the visible class 
    $(".sidebar__header-button, .nav__menu-icon").click(function() {
      $(".sidebar").toggleClass("visible");
    });

    // Handler for the sidebar menu links
    $(".sidebar__menu-items-link ").click(function(e) {
      var islinkActive = $(this).hasClass('active'),
          hasSubMenu = $(this).next().hasClass("sidebar__sub-menu");


      if (hasSubMenu) {
        // This link has a sub menu hence we prevent default behaviour
        e.preventDefault();
      }

      if (islinkActive) {
        // If link already has active class we only remove it from itself
        $(this).removeClass('active');  
      } else {
        // Otherwise we remove active class from every other submenu element
        // and add it tot he one that was clicked
        $(".sidebar__menu-items-link").removeClass("active");
        $(this).addClass('active');  
      }
      
    });
  };

  Nova.prototype.init = function() {
    this.injectSidebar();
    this.injectNavbar();
  };

  $.Nova = new Nova();





  // Function that initializes the event handler for tab elements
  // It is called upon the tab ID.
  $.fn.initTab = function() {
    var tabId = $(this)[0].id;
    $('#' +tabId + ' li').click(function() {
      var index = $('#' +tabId + ' li').index(this);
      
      $('#' +tabId + ' li').removeClass("is-active");
      $('#' +tabId + ' .tabs__content div').removeClass("is-active");
      
      $('#' +tabId + ' .tabs__content div:eq('+index+')').addClass('is-active');
      $(this).addClass("is-active");  
    });
  };

  // Function that initialized the event handler for the accordion element
  // It is called upon the accordion ID
  $.fn.initAccordion = function() {
    var accId = $(this)[0].id;
    $('#'+ accId +' .accordion__section-header').click(function(e) {
      e.preventDefault();
      var visibleAccordion = $('#'+ accId + ' .show');
      
      if ($(this).next()[0] == visibleAccordion[0]) {
        $(this).next().slideToggle();
        $(this).next().removeClass('show');
      } else {
        visibleAccordion.slideToggle();
        visibleAccordion.removeClass('show');
        $(this).next().slideToggle();
        $(this).next().addClass('show');
      }
      
      
    });
  }


  $.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });

})(window.jQuery);

(function($) {

  var Notification = function(container, options) {
    
    var self = this;
    
    self.container = $(container);
    self.options = $.extend(true, {}, $.fn.notify.defaults, options);
    var isThereNotifWrp = $('.notify-wrp.'+ self.options.position).length ? true : false;

    self.notifWrp = !isThereNotifWrp ? $('<div class="notify-wrp '+ self.options.position +'">') : $('.notify-wrp.' + self.options.position);
    self.notification = $('<div class="notify n-'+ self.options.style +' animated '+ self.options.animationIn +'">');
    self.message = $('<p>' + self.options.message + '</p>');
    self.closeButton = $('<a><span class="pe-7s-close"></span></a>');
    self.closeButton.on('click', closeNotification);
    self.notification.append(self.message);
    self.notification.append(self.closeButton);

    self.notifWrp.append(self.notification);

    if (self.options.type === "bar" && self.options.position === 'top') {
     self.notifWrp.addClass('bar' + ' top'); 
    }  else if (self.options.type === "bar" && self.options.position === 'bottom') {
      self.notifWrp.addClass('bar' + ' bottom'); 
    } else if (self.options.type === 'image') {
      self.imageWrp = '<figure class="notify__img"><img src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" alt="image notification"/></figure>';
      self.notification.prepend(self.imageWrp);
    }

    if (self.options.timeOut && self.options.timeOut !== '') {
      setTimeout(function() {
        closeNotification();
      }, self.options.timeOut);
    }

    if (!isThereNotifWrp) {
      $(container).append(self.notifWrp);
    }

    function closeNotification() {      
      self.notification.removeClass(self.options.animationIn).animateCss(self.options.animationOut, function() {
        self.notification.remove();
      });
    }
  }

  

$.fn.notify = function(options) {
  return new Notification(this, options);
}

$.fn.notify.defaults = {
  type: 'simple',
  style: 'success',
  position: 'top-right',
  animationIn: 'fadeIn',
  animationOut: "fadeOut",
  showClose: true,
  message: null,
  timeOut: null
}

}(window.jQuery));

(function($) { 
  var Modal = function(options, modal) {
  
    var self = this;
    this.options = $.extend(true, {}, $.fn.modal.defaults, options);
    this.modal = modal;
    
    modal.find('.modal').addClass('modal--' + this.options.style);
    modal.on('click', this.hide.bind(this));
    modal.find('.modal__close').on('click', this.hide.bind(this));
    modal.find('.modal').on('click', function(e) {
      e.stopPropagation();
    })
  }

  Modal.prototype.show = function () {
    
    this.modal.addClass("is-visible");
    this.modal.find('.modal').animateCss(this.options.animationIn);
  }

  Modal.prototype.hide = function () {
    var self = this;
    
    this.modal.find('.modal').animateCss(this.options.animationOut, function() {
      self.modal.removeClass("is-visible");
    });
  }

  $.fn.modal = function(options) {
    if (typeof options === 'object') {
      // Initializing the modal
      return new Modal(options, this)
    }
  }

  $.fn.modal.defaults = {
    style: 'default',
    animationIn: 'bounceInDown',
    animationOut: 'bounceOutUp'
  }

})(window.jQuery);

(function($) {
  $(document).ready(function() {
    $.Nova.init();
  });
})(window.jQuery);
