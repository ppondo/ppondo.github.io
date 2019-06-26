(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var tech = document.getElementById('tech')
  tech.onchange = function() {
    tech.style.transition='1000ms ease-out'
  }
  var react = document.getElementById('react')
  var redux = document.getElementById('redux')
  var javascript = document.getElementById('javascript')
  var ruby = document.getElementById('ruby')
  var rails = document.getElementById('rails')
  var post = document.getElementById('post')
  var html = document.getElementById('html')
  var css = document.getElementById('css')

  //React
  react.onmouseover = function() {
    tech.innerHTML = 'React.js'
  }
  react.onmouseleave= function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //Redux
  redux.onmouseover = function () {
    tech.innerHTML = 'Redux.js'
  }
  redux.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //JavaScript
  javascript.onmouseover = function () {
    tech.innerHTML = 'JavaScript'
  }
  javascript.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //Ruby
  ruby.onmouseover = function () {
    tech.innerHTML = 'Ruby'
  }
  ruby.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //Rails
  rails.onmouseover = function () {
    tech.innerHTML = 'Ruby On Rails'
  }
  rails.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //Postgresql
  post.onmouseover = function () {
    tech.innerHTML = 'PostgreSQL'
  }
  post.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //HTML
  html.onmouseover = function () {
    tech.innerHTML = 'HTML5'
  }
  html.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }
  //CSS
  css.onmouseover = function () {
    tech.innerHTML = 'CSS3'
  }
  css.onmouseleave = function () {
    tech.innerHTML = 'Developer Toolkit'
  }


})(jQuery); // End of use strict
