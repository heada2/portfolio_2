$(document).ready(function(){
  $(".depth2, .gnb-bg").hide();
  /*
  $(".gnb").mouseenter(function(){
    $(".gnb > li").addClass("open");
  });
  $(".gnb").mouseleave(function(){
    $(".gnb > li").removeClass("open");
  });
  */
  $(".gnb > li").hover(function(){
    $(".depth2, .gnb-bg").stop().slideToggle();
  });

  //desktop new tab
  $(".dt-new-cont li").hide();

      $(".dt-new-btn li").eq(0).addClass("active");
      $(".dt-new-cont li").eq(0).show();

      $(".dt-new-btn li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        var Num = $(this).index();
        $(".dt-new-cont li").eq(Num).show().siblings().hide();
      });

    //#today-desktop
    $(".today-desk-cont .today-desk-con").hide();

    $(".today-desk-btn li").eq(0).addClass("click");
      $(".today-desk-cont .today-desk-con").eq(0).show();

      $(".today-desk-btn li").click(function(){
        $(this).addClass("click");
        $(this).siblings().removeClass("click");

        var Num = $(this).index();
        $(".today-desk-cont .today-desk-con").eq(Num).show().siblings().hide();
      });

    //#today-desktop .today-desk-cont .today-desk-btn1 tab
    $(".today-desk-con1 li").hide();

    $(".today-desk-btn1 li").eq(0).addClass("on");
      $(".today-desk-con1 li").eq(0).show();

      $(".today-desk-btn1 li").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

        var Num = $(this).index();
        $(".today-desk-con1 li").eq(Num).show().siblings().hide();
      });
      //#today-desktop .today-desk-cont .today-desk-btn2 tab
      $(".today-desk-con2 li").hide();

      $(".today-desk-btn2 li").eq(0).addClass("on");
        $(".today-desk-con2 li").eq(0).show();
  
        $(".today-desk-btn2 li").click(function(){
          $(this).addClass("on");
          $(this).siblings().removeClass("on");
  
          var Num = $(this).index();
          $(".today-desk-con2 li").eq(Num).show().siblings().hide();
        });   
        //3
        $(".today-desk-con3 li").hide();

        $(".today-desk-btn3 li").eq(0).addClass("on");
          $(".today-desk-con3 li").eq(0).show();
    
          $(".today-desk-btn3 li").click(function(){
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
    
            var Num = $(this).index();
            $(".today-desk-con3 li").eq(Num).show().siblings().hide();
          }); 
          //4
          $(".today-desk-con4 li").hide();

          $(".today-desk-btn4 li").eq(0).addClass("on");
            $(".today-desk-con4 li").eq(0).show();
      
            $(".today-desk-btn4 li").click(function(){
              $(this).addClass("on");
              $(this).siblings().removeClass("on");
      
              var Num = $(this).index();
              $(".today-desk-con4 li").eq(Num).show().siblings().hide();
            }); 
            //5
            $(".today-desk-con5 li").hide();

            $(".today-desk-btn5 li").eq(0).addClass("on");
              $(".today-desk-con5 li").eq(0).show();
        
              $(".today-desk-btn5 li").click(function(){
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
        
                var Num = $(this).index();
                $(".today-desk-con5 li").eq(Num).show().siblings().hide();
              }); 
        
        //.desktop-notice
        $(".desktop-notice-cont .desktop-notice-cont1").hide();

        $(".desktop-notice-btn li").eq(0).addClass("on1");
          $(".desktop-notice-cont .desktop-notice-cont1").eq(0).show();
    
          $(".desktop-notice-btn li").click(function(){
            $(this).addClass("on1");
            $(this).siblings().removeClass("on1");
    
            var Num = $(this).index();
            $(".desktop-notice-cont .desktop-notice-cont1").eq(Num).show().siblings().hide();
          });  
          //데스크탑_리뷰스와이퍼퍼
          var Dtreview = new Swiper(".desktop-review1", {
            spaceBetween: 25,
            slidesPerView: 4,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          });


  //모바일 header
  $(".ham").click(function(){
    $(".mgnb-wrap").animate({"left" : "0"}, 500, "swing");
  });
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({"left" : "-100%"}, 500, "swing");
  });

  $(".m-search").click(function(){
    $(".m-search-wrap").animate({"right" : "0"}, 500, "swing");
  });
  $(".m-search-wrap img").click(function(){
    $(".m-search-wrap").animate({"right" : "-100%"}, 500, "swing");
  });

  //모바일new
  var mNew1 = new Swiper(".m-new1", {
    spaceBetween: 30,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var todayMb = new Swiper(".today-mb", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //모바일today
  $(".today-mb-cont .today-mb").hide();

  $(".today-mb-btn li").eq(0).addClass("click");
    $(".today-mb-cont .today-mb").eq(0).show();

    $(".today-mb-btn li").click(function(){
      $(this).addClass("click");
      $(this).siblings().removeClass("click");

      var Num = $(this).index();
      $(".today-mb-cont .today-mb").eq(Num).show().siblings().hide();
    });
    //모바일event
    var eventMb = new Swiper(".mb-envet1", {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    //모바일review
    var reviewMb = new Swiper(".mb-review1", {
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
});