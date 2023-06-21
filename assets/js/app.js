// // sticky menu
var header = document.getElementsByClassName("main_header")[0];
var sticky = header.offsetTop;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})

// dropdown js

// object select element
const selectElement = {
    dropdownBtn: document.getElementsByClassName("dropdown_button"),
    subNavItem: document.getElementsByClassName("dropdown_sub"),
    nestedDropdownBtn: document.getElementsByClassName("sub_dropdown_btn"),
    subDropdownItem: document.getElementsByClassName("sub_nestedDrop_nav")
}

// element destructure
let {dropdownBtn, subNavItem, subDropdownItem, nestedDropdownBtn} = selectElement

;[...dropdownBtn].forEach((innerBtn, index) => {
    let innerNav = subNavItem[index];
    innerBtn.addEventListener("click", function() {
      $(innerNav).slideToggle();
      $(".dropdown_sub").not(innerNav).slideUp();
      $(".dropdown_button").removeClass("active");
      $(innerBtn).toggleClass("active");
    });
});

// nested sub nav
;[...nestedDropdownBtn].forEach((innerNested, index) => {
    let innerNestedNav = subDropdownItem[index];
    innerNested.addEventListener("click", function() {
      $(innerNestedNav).slideToggle();
      $(".sub_nestedDrop_nav").not(innerNestedNav).slideUp();
      $(".sub_dropdown_btn").removeClass("active");
      $(innerNested).toggleClass("active");
    });
  });


// banner slider
$(function (e){
  e('.testimonial_slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
  });
})

// offer
$(function (e) {
  "use strict";
  e(".offer_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slideroffer_arrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 1,
          }
      }
    ]
  })
});

// combo
$(function (e) {
  "use strict";
  e(".combo_offer_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slider_arrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 1,
          }
      }
    ]
  })
});

// magnific popup

$('.video_popup').magnificPopup({
  type: 'iframe'
});


//   socket year
let socketYear = document.getElementById("socket_year")
let PresentYear = (year) =>{
  let date = new Date()
  let PreYear = date.getFullYear()
  year.innerText = PreYear
}
PresentYear(socketYear)


// package
$(".one-item-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".all-item-slider",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        vertical: false,
        horizontal: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".all-item-slider").slick({
  slidesToShow: 4,
  asNavFor: ".one-item-slider",
  arrows: false,
  dots: false,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        vertical: false,
        horizontal: true,
        slidesToShow: 3,
      },
    },
  ],
});

// currency 

const curElement = {
  mainCurrency: document.getElementById("currency"),
  langBtn: document.getElementById("lang_btn")
}
let {mainCurrency, langBtn} = curElement
const currencyItem = mainCurrency.children;

;[...currencyItem].forEach((innerItem) => {
  const languageText = innerItem.querySelector(".language_text");
  const languageFlag = innerItem.querySelector(".language_flag");
  
  innerItem.addEventListener("click", function(e){
    langBtn.querySelector(".language_text_select").textContent = languageText.textContent;
    langBtn.querySelector(".language_flag").innerHTML = languageFlag.innerHTML;
  });
});
