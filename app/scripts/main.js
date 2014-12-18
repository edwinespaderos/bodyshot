$(document).ready(function() {
  

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


  $(function() {
      $('.banner').unslider({
        speed: 400,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: false,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
      });
  });

  var unslider = $('.banner').unslider();
      
      $('.next').click(function(e) {
          var fn = this.className.split(' ')[1];
          e.preventDefault();
          //  Either do unslider.data('unslider').next() or .prev() depending on the className
          unslider.data('unslider').next();
      });

  var unslider = $('.banner').unslider();
      
      $('.previous').click(function(e) {
          var fn = this.className.split(' ')[1];
          e.preventDefault();
          //  Either do unslider.data('unslider').next() or .prev() depending on the className
          unslider.data('unslider').prev();
      });

 
  var unslider = $('.banner').unslider();
        
        $('.menu-rum').click(function(e) {
            
            unslider.data('unslider').move(0);
        });
  
  var unslider = $('.banner').unslider();
  
  $('.menu-menthol').click(function(e) {
      
      unslider.data('unslider').move(1);
  });
  
  var unslider = $('.banner').unslider();
        
        $('.menu-tobacco').click(function(e) {
            
            unslider.data('unslider').move(2);
        });

  var unslider = $('.banner').unslider();
        
        $('.menu-sangria').click(function(e) {
            
            unslider.data('unslider').move(3);
        });

  var unslider = $('.banner').unslider();
        
        $('.menu-whiskey').click(function(e) {
            
            unslider.data('unslider').move(4);
        });

  var unslider = $('.banner').unslider();
        
        $('.menu-mojito').click(function(e) {
            
            unslider.data('unslider').move(5);
        });

  var unslider = $('.banner').unslider();
        
        $('.menu-trance').click(function(e) {
            unslider.data('unslider').move(6);
        });

});