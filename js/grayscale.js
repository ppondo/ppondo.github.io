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

})(jQuery); // End of use strict

var tech = document.getElementById('tech')
tech.onchange = function () {
  tech.style.transition = '1000ms ease-out'
}
var react = document.getElementById('react')
var redux = document.getElementById('redux')
var javascript = document.getElementById('javascript')
var ruby = document.getElementById('ruby')
var rails = document.getElementById('rails')
var post = document.getElementById('post')
var html = document.getElementById('html')
var css = document.getElementById('css')
var git = document.getElementById('git')
var aws = document.getElementById('aws')
var webpack = document.getElementById('webpack')
var heroku = document.getElementById('heroku')

//React
react.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'React.js';
    tech.style.opacity = 1;
  }, 400);
}
react.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//Redux
redux.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Redux.js';
    tech.style.opacity = 1;
  }, 400);
}
redux.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//JavaScript
javascript.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'JavaScript';
    tech.style.opacity = 1;
  }, 400);
}
javascript.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//Ruby
ruby.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Ruby';
    tech.style.opacity = 1;
  }, 400);
}
ruby.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//Rails
rails.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Ruby on Rails';
    tech.style.opacity = 1;
  }, 400);
}
rails.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//Postgresql
post.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'PostgreSQL';
    tech.style.opacity = 1;
  }, 400);
}
post.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//HTML
html.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'HTML5';
    tech.style.opacity = 1;
  }, 400);
}
html.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//CSS
css.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'CSS3';
    tech.style.opacity = 1;
  }, 400);
}
css.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}
//aws
aws.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Amazon Web Services';
    tech.style.opacity = 1;
  }, 400);
}
aws.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}

//git
git.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Git';
    tech.style.opacity = 1;
  }, 400);
}
git.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}

//webpack
webpack.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Webpack';
    tech.style.opacity = 1;
  }, 400);
}
webpack.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}

//heroku
heroku.onmouseover = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Heroku';
    tech.style.opacity = 1;
  }, 400);
}
heroku.onmouseleave = function () {
  tech.style.opacity = 0;
  setTimeout(function () {
    tech.innerHTML = 'Developer Toolkit';
    tech.style.opacity = 1;
  }, 400);
}