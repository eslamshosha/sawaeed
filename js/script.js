let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 1199) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top,
      },
      1000
    );
  });
  // for counter //

  var a = 0;
  function countFunction() {
    $(".counter-num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
  if (!document.querySelector("body").classList.contains("internal-page")) {
    $(window).scroll(function () {
      var oTop = $(".counter-cont").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        countFunction();
      }
    });
  }
  if ($(window).width() >= 767) {
    setTimeout(function header_animation() {
      $(".main-captions").animate({ width: "100%" }, 1500);
      setTimeout(function () {
        $(".main-captions").css("border", "none");
        $(".main-span").css("border-left", "1px solid #fff");
        $(".main-span").animate({ width: "100%" }, 1500);
        setTimeout(function () {
          $(".main-span").css("border", "none");
        }, 1500);
      }, 1500);
    }, 700);
  }
  ///////// **partner-section** /////////
  var screen = new Swiper(".partner-section .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".partner-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  ////////////////add swiper carsoul to section honored////////////////////////////////
  if ($(window).width() < 991) {
    $(".honored .swiper-cont").addClass("swiper-container");
    $(".honored .swiper-wrapperr").addClass("swiper-wrapper");
    $(".honored .swiper-slidees").addClass("swiper-slide");
    var honored = new Swiper(".honored .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".honored .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        359: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      },
      on: {
        slideChange: function (honored) {
          var borderRotate = document.getElementsByClassName("border-rotate");
          if (honored.realIndex == 0) {
            borderRotate[0].style.transform = "rotate(-81deg)";
          } else if (honored.realIndex == 1) {
            borderRotate[0].style.transform = "rotate(0deg)";
          } else if (honored.realIndex == 2) {
            borderRotate[0].style.transform = "rotate(100deg)";
          } else if (honored.realIndex == 3) {
            borderRotate[0].style.transform = "rotate(180deg)";
          } else {
            borderRotate[0].style.transform = "none";
          }
        },
      },
    });
  }
  if ($(".new-address-select").length) {
    $(".new-address-select").select2();
  }
});
//rotate border
if ($(window).width() >= 991) {
  var borderRotate = document.getElementsByClassName("border-rotate");
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    if (cityName == "first") {
      borderRotate[0].style.transform = "rotate(-81deg)";
    } else if (cityName == "second") {
      borderRotate[0].style.transform = "rotate(180deg)";
    } else if (cityName == "third") {
      borderRotate[0].style.transform = "rotate(0deg)";
    } else if (cityName == "fourth") {
      borderRotate[0].style.transform = "rotate(100deg)";
    } else {
      borderRotate[0].style.transform = "none";
    }
  }
}
