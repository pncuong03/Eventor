(function($){
  "use strict";
  
  /* sticky header - start*/
  
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header-nav').addClass("sticky")
    } else {
      $('.header-nav').removeClass("sticky")
    }
  });
  /* sticky header - end */
  
  /* bg parallax - start */
  
  $('[data-parallax]').parallax({
    speed: .6,
  });
  /* bg parallax - end */
  
  /* hero sec start sec end */
  // $('.hero-slider-wrap').slick({
  //   dots: true,
  //   speed: 1000,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow:1,
  //   pauseOnHover: true,
  //   autoplaySpeed: 6000,
  // });
  
  /* hero sec start sec end */
  
  /* review sec start start */
  var countdown = document.querySelector('.counter-box');
    
      // Định nghĩa hàm đếm ngược
      function updateCountdown() {
        var targetDate = new Date(countdown.getAttribute('data-countdown')).getTime();
        var currentDate = new Date().getTime();
        var timeRemaining = targetDate - currentDate;
    
        if (timeRemaining <= 0) {
          clearInterval(interval);
          return;
        }
    
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        // Cập nhật giá trị trong HTML
        document.querySelector('.day2').textContent = days;
        document.querySelector('.hours2').textContent = hours;
        document.querySelector('.min2').textContent = minutes;
        document.querySelector('.sec2').textContent = seconds;
      }
    
      // Cập nhật đếm ngược mỗi giây
      updateCountdown();
      var interval = setInterval(updateCountdown, 1000);
  
  $('.review-card-items-wrap').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".main-left-arrow",
    nextArrow: ".main-right-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        }
      }
      
    ]
  });
  $(document).ready(function(){
    // Chọn phần tử chứa slider và gọi phương thức .slick() để cấu hình slider
    $('.hero-slider-wrap').slick({
      // Các tùy chọn của slider ở đây
      infinite: true, // Vô hạn cuộn
      slidesToShow: 1, // Hiển thị số lượng slide trên mỗi lần trượt
      slidesToScroll: 1, // Trượt bao nhiêu slide khi di chuyển
      autoplay: true, // Tự động chạy slider
      autoplaySpeed: 2000, // Tốc độ chạy tự động (miliseconds)
      dots: true, // Hiển thị dấu chấm (pagination)
      arrows: true, // Hiển thị các mũi tên điều hướng
      prevArrow: '<button class="slick-prev">Previous</button>', // HTML cho mũi tên Previous
      nextArrow: '<button class="slick-next">Next</button>', // HTML cho mũi tên Next
    });
  });
  
  /* review sec start sec end */
  
  /* counter */
  // $('.counter-box[data-countdown]').each(function() {
  //   var $this = $(this), finalDate = $(this).data('countdown');
  //   $this.countdown(finalDate, function(event) {
  //     var $this = $(this).html(event.strftime(''
  //     + '<li class="days"><strong class="day2">%D</strong><span class="d-block">Days</span></li>'
  //     + '<li class="hours"><strong class="hours2">%H</strong><span class="d-block">Hours</span></li>'
  //     + '<li class="minutes"><strong class="min2">%M</strong><span class="d-block">Minutes</span></li>'
  //     + '<li class="seconds"><strong class="sec2">%S</strong><span class="d-block">Seconds</span></li>'));
  //   });
  // });
 

  $(document) .ready(function(){
    $('.zoom-gallery').magnificPopup({
        delegate: '.item-thumb',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
  });
    
})(jQuery);

