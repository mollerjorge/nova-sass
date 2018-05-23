(function($) {
  var Nova = function() {
    this.VERSION = "1.0";
    this.AUTHOR = "Jorge Moller";
  };

  Nova.prototype.injectSidebar = function() {
    //var sidebar = ' <div class="sidebar__header"> <img src="nova/img/nova-logo.svg" class="sidebar__header-logo" /> <input id="sidebar-toggle" class="sidebar-toggle" type="checkbox" /> <label class="sidebar__header-button" for="sidebar-toggle"> <span></span> </label></div><div class="sidebar__menu"> <ul class="sidebar__menu-items"> <li> <a href="index.html" class="sidebar__menu-items-link active"> <span class="link-name">Dashboard</span> <span class="sidebar__menu-items-icon"> <i class="pe-7s-home"></i> </span> </a> </li> <li> <a href="email.html" class="sidebar__menu-items-link "> <span class="link-name">Email</span> <span class="sidebar__menu-items-icon"> <i class="pe-7s-mail"></i> <span style="position: absolute; top: 50%; left: 100%; transform: translate(0%, -50%)"> 10 </span> </span> </a> </li> <li> <a href="" class="sidebar__menu-items-link "> <span class="link-name">UI Elements</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-diamond"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="inputs.html" class="sidebar__menu-items-link ">inputs <span class="sidebar__menu-items-icon"> Ip </span> </a> </li> <li> <a href="buttons.html" class="sidebar__menu-items-link">buttons <span class="sidebar__menu-items-icon"> Bt </span> </a> </li> <li> <a href="alerts.html" class="sidebar__menu-items-link">alerts <span class="sidebar__menu-items-icon"> As </span> </a> </li> <li> <a href="notifications.html" class="sidebar__menu-items-link">notifications <span class="sidebar__menu-items-icon"> Ns </span> </a> </li> <li> <a href="cards.html" class="sidebar__menu-items-link">cards <span class="sidebar__menu-items-icon"> Cr </span> </a> </li> <li> <a href="modal.html" class="sidebar__menu-items-link">modals <span class="sidebar__menu-items-icon"> Ml </span> </a> </li> <li> <a href="tabs-acordions.html" class="sidebar__menu-items-link">tabs <span class="sidebar__menu-items-icon"> Ts </span> </a> </li> <li> <a href="progress-bar.html" class="sidebar__menu-items-link">progress bar <span class="sidebar__menu-items-icon"> Pb </span> </a> </li> <li> <a href="typography.html" class="sidebar__menu-items-link">typography <span class="sidebar__menu-items-icon"> Ty </span> </a> </li> </ul> </li> <li> <a href="" class="sidebar__menu-items-link "> <span class="link-name">Form</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-browser"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="form-elements.html" class="sidebar__menu-items-link"> form elements <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> Fe </span> </a> </li> <li> <a href="formWizard.html" class="sidebar__menu-items-link"> form wizard <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> FW </span> </a> </li> </ul> </li> <li> <a href="table.html" class="sidebar__menu-items-link "> <span class="link-name">Tables</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-display1"></i> </span> </a> </li> <li> <a href="charts.html" class="sidebar__menu-items-link "> <span class="link-name">Charts</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-graph1"></i> </span> </a> </li> <li> <a href="cards.html" class="sidebar__menu-items-link "> <span class="link-name">Cards</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-albums"></i> </span> </a> </li> <li> <a href="maps.html" class="sidebar__menu-items-link "> <span class="link-name">Maps</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-map"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="default-map.html" class="sidebar__menu-items-link"> default map <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> DM </span> </a> </li> <li> <a href="dark-map.html" class="sidebar__menu-items-link"> dark map <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> KM </span> </a> </li> <li> <a href="nova-map.html" class="sidebar__menu-items-link"> nova map <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> NM </span> </a> </li> </ul> </li> <li> <a href="icons.html" class="sidebar__menu-items-link "> <span class="link-name">Icons</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-science"></i> </span> </a> </li> <li> <a href="charts.html" class="sidebar__menu-items-link "> <span class="link-name">Extra</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-shopbag"></i> </span> </a> <ul class="sidebar__sub-menu"> <li> <a href="login.html" class="sidebar__menu-items-link"> Login <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> L1 </span> </a> </li> <li> <a href="login-2.html" class="sidebar__menu-items-link"> Login 2 <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> L2 </span> </a> </li> <li> <a href="404.html" class="sidebar__menu-items-link"> 404 page <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> 404 </span> </a> </li> <li> <a href="locked-screen.html" class="sidebar__menu-items-link"> Locked Screen <i class="pe-7s-angle-left caret"></i> <span class="sidebar__menu-items-icon"> LS </span> </a> </li> </ul> </li> <li> <a href="colors.html" class="sidebar__menu-items-link "> <span class="link-name">Colors</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-eyedropper"></i> </span> </a> </li> <li> <a href="docs.html" class="sidebar__menu-items-link "> <span class="link-name">Docs</span> <div class="caret-wrp"> <i class="pe-7s-angle-left caret"></i> </div> <span class="sidebar__menu-items-icon"> <i class="pe-7s-help1"></i> </span> </a> </li> </ul></div>';

    $.get("../../sidebar-component.html", function(data) {
      $(".sidebar").html(data);
      $.Nova.initSidebar();
    });
  };

  Nova.prototype.injectNavbar = function() {
    var navbar =
      '<nav class="nav"> <div class="nav__menu"> <div class="nav__menu-icon"> <span></span> </div></div><div class="nav__logo"> <img src="./nova/img/nova-logo.svg" alt="logo nova nav"/> </div><div class="nav__search-box"> <form class="form" action=""> <div class="form--group"> <div class="form__input"> <input type="text" placeholder="Begin typing to search anything!" class="form__control form__control--icon search"> <span class="pe-7s-search"></span> </div></div></form> </div><div class="nav__profile"> <div class="nav__profile-notifications"> <div class="nav__profile-icon"> <span class="pe-7s-bell"><div class="badge success"> <span>10</span> </div></span> </div><div class="nav__profile-icon"> <span class="pe-7s-mail"><div class="badge secondary"> <span>8</span> </div></span> </div><div class="nav__profile-icon"> <span class="pe-7s-drawer"> <div class="badge danger"> <span>4</span> </div></span> </div></div><div class="nav__profile-user"> <figure class="nav__profile-shape"> <img src="./nova/img/profile-woman.jpg" alt="profile picture"/> </figure> <a class="nav__profile-link" href="#"> John Smith</a> <span class="pe-7s-angle-down"></span> </div></div></nav>';
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

      var height = $(this).next().children().length * 40 + 120;

      if (hasSubMenu) {
        // This link has a sub menu hence we prevent default behaviour
        e.preventDefault();
      }

      if (islinkActive) {
        // If link already has active class we only remove it from itself
        $(this).removeClass('active');    
        $(this).next().css('max-height', '0px');
      } else {
        // Otherwise we remove active class from every other submenu element
        // and add it tot he one that was clicked
        $(".sidebar__menu-items-link").removeClass("active");
        $(this).addClass('active');  
        $(this).next().css('max-height', height + 'px');
        
      }
      
    });

    
  };

  Nova.prototype.init = function() {
    this.injectSidebar();
    this.injectNavbar();
  };

  Nova.prototype.isMobile = function() {
    var isMobile = false; //initiate as false
    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }
    return isMobile;
  }

  Nova.prototype.initSkroll = function () {
    if (!this.isMobile()) {
      skrollr.init();
    }
  }

  $.Nova = new Nova();





  // Function that initializes the event handler for tab elements
  // It is called upon the tab ID.
  $.fn.initTab = function() {
    var tabId = $(this)[0].id;
    $('#' +tabId + ' li').click(function() {
      var index = $('#' +tabId + ' li').index(this);
      
      $('#' +tabId + ' li').removeClass("is-active");
      $('#' +tabId + ' .tabs__content div').removeClass("is-active");
      
      $('#' +tabId + ' .tabs__content div').eq(index).addClass('is-active');
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
      
      self.notification.removeClass(self.options.animationIn);
      self.notification.animateCss(self.options.animationOut, function() {
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
