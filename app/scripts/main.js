$(document).ready(function() {
  

  $(".next").on("click", function(e){
      
      var currentActiveSection = $(".image-shown");
      var nextActiveSection = currentActiveSection.next();
       
        if(nextActiveSection.length == 0){
          nextActiveSection = $(".slider div").first();
        };


      currentActiveSection.removeClass('image-shown').addClass('image-hidden')//.css("z-index", -10);
      nextActiveSection.addClass('image-shown').removeClass('image-hidden');

      $(".slider img").not([currentActiveSection, nextActiveSection])//.css("z-index", 1);
      
      e.preventDefault();

  });


  $(".previous").on("click", function(e){

    var currentActiveSection = $(".image-shown");
    var prevActiveSection = currentActiveSection.prev();

      if (prevActiveSection.length == 0){
        prevActiveSection = $(".slider div").first();
      };

    currentActiveSection.removeClass('image-shown').addClass('image-hidden')//.css("z-index", 10);
    prevActiveSection.addClass('image-shown').removeClass('image-hidden');

    $(".slider img").not([currentActiveSection, prevActiveSection])//.css("z-index", 1);

    e.preventDefault();

  });
 
  $(".menu-rum").on("click", function(){
    
      $(".rum").removeClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });
  
  $(".menu-menthol").on("click", function(){
      
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").removeClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });

  $(".menu-mojito").on("click", function(){
        
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").removeClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });

  $(".menu-tobacco").on("click", function(){
            
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").removeClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });

  $(".menu-sangria").on("click", function(){
            
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").removeClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });

$(".menu-whiskey").on("click", function(){
            
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").removeClass('image-hidden')//.css("z-index", -10);
      $(".trance").addClass('image-hidden')//.css("z-index", -10);
    
    });

$(".menu-trance").on("click", function(){
            
      $(".rum").addClass('image-hidden')//.css("z-index", -10);
      $(".menthol").addClass('image-hidden')//.css("z-index", -10);
      $(".mojito").addClass('image-hidden')//.css("z-index", -10);
      $(".tobacco").addClass('image-hidden')//.css("z-index", -10);
      $(".sangria").addClass('image-hidden')//.css("z-index", -10);
      $(".whiskey").addClass('image-hidden')//.css("z-index", -10);
      $(".trance").removeClass('image-hidden')//.css("z-index", -10);
    
    });

$('#btn-confirm').click(function(){
    $("#age-verefier").addClass("active");
});

  var  n = $(".bottom-nav");
      ns = "nav-scroll";
      hdr = $('.hero').height();


  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      n.addClass(ns);
    } else {
      n.removeClass(ns);
    }
  });


  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });



});