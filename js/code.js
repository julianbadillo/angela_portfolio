$('.btn_nav').click(function() {
  // animate content
  $('.page_style').addClass('animate_content');
  $('.page_description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page_style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page_style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.home_link').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.clients_link').click(function() {
  setTimeout(function() {
    $('.clients').addClass('fadeIn');
  }, 1500);
});

$('.portfolio_link').click(function() {
  setTimeout(function() {
    $('.portfolio').addClass('fadeIn');
  }, 1500);
});


$('.about_link').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.contact_link').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
});




//     Avatar Animation

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/data.json',
});

// --swiper explore--

let swiperExplore = new Swiper(".explore_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      576: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
  },

});
