$(document).ready(function(){$("#btn-confirm").click(function(){$("#age-verefier").addClass("active")});var a=$(".bottom-nav");ns="nav-scroll",hdr=$(".hero").height(),$(window).scroll(function(){$(this).scrollTop()>hdr?a.addClass(ns):a.removeClass(ns)}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(function(){$(".banner").unslider({speed:400,delay:3e3,complete:function(){},keys:!0,dots:!1,fluid:!0})});var b=$(".banner").unslider();$(".next").click(function(a){this.className.split(" ")[1];a.preventDefault(),b.data("unslider").next()});var b=$(".banner").unslider();$(".previous").click(function(a){this.className.split(" ")[1];a.preventDefault(),b.data("unslider").prev()});var b=$(".banner").unslider();$(".menu-rum").click(function(){b.data("unslider").move(0)});var b=$(".banner").unslider();$(".menu-menthol").click(function(){b.data("unslider").move(1)});var b=$(".banner").unslider();$(".menu-tobacco").click(function(){b.data("unslider").move(2)});var b=$(".banner").unslider();$(".menu-sangria").click(function(){b.data("unslider").move(3)});var b=$(".banner").unslider();$(".menu-whiskey").click(function(){b.data("unslider").move(4)});var b=$(".banner").unslider();$(".menu-mojito").click(function(){b.data("unslider").move(5)});var b=$(".banner").unslider();$(".menu-trance").click(function(){b.data("unslider").move(6)})}),function(a,b){if(!a)return b;var c=function(){this.el=b,this.items=b,this.sizes=[],this.max=[0,0],this.current=0,this.interval=b,this.opts={speed:500,delay:3e3,complete:b,keys:!b,dots:b,fluid:b};var c=this;this.init=function(b,c){return this.el=b,this.ul=b.children("ul"),this.max=[b.outerWidth(),b.outerHeight()],this.items=this.ul.children("li").each(this.calculate),this.opts=a.extend(this.opts,c),this.setup(),this},this.calculate=function(b){var d=a(this),e=d.outerWidth(),f=d.outerHeight();c.sizes[b]=[e,f],e>c.max[0]&&(c.max[0]=e),f>c.max[1]&&(c.max[1]=f)},this.setup=function(){if(this.el.css({overflow:"hidden",width:c.max[0],height:this.items.first().outerHeight()}),this.ul.css({width:100*this.items.length+"%",position:"relative"}),this.items.css("width",100/this.items.length+"%"),this.opts.delay==b&&(this.start(),this.el.hover(this.stop,this.start)),this.opts.keys&&a(document).keydown(this.keys),this.opts.dots&&this.dots(),this.opts.fluid){var d=function(){c.el.css("width",Math.min(Math.round(c.el.outerWidth()/c.el.parent().outerWidth()*100),100)+"%")};d(),a(window).resize(d)}this.opts.arrows&&this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){a.isFunction(c[this.className])&&c[this.className]()}),a.event.swipe&&this.el.on("swipeleft",c.prev).on("swiperight",c.next)},this.move=function(b,d){this.items.eq(b).length||(b=0),0>b&&(b=this.items.length-1);var e=this.items.eq(b),f={height:e.outerHeight()},g=d?5:this.opts.speed;this.ul.is(":animated")||(c.el.find(".dot:eq("+b+")").addClass("active").siblings().removeClass("active"),this.el.animate(f,g)&&this.ul.animate(a.extend({left:"-"+b+"00%"},f),g,function(){c.current=b,a.isFunction(c.opts.complete)&&!d&&c.opts.complete(c.el)}))},this.start=function(){c.interval=setInterval(function(){c.move(c.current+1)},c.opts.delay)},this.stop=function(){return c.interval=clearInterval(c.interval),c},this.keys=function(b){var d=b.which,e={37:c.prev,39:c.next,27:c.stop};a.isFunction(e[d])&&e[d]()},this.next=function(){return c.stop().move(c.current+1)},this.prev=function(){return c.stop().move(c.current-1)},this.dots=function(){var b='<ol class="dots">';a.each(this.items,function(a){b+='<li class="dot'+(1>a?" active":"")+'">'+(a+1)+"</li>"}),b+="</ol>",this.el.addClass("has-dots").append(b).find(".dot").click(function(){c.move(a(this).index())})}};a.fn.unslider=function(b){var d=this.length;return this.each(function(e){var f=a(this),g=(new c).init(f,b);f.data("unslider"+(d>1?"-"+(e+1):""),g)})}}(window.jQuery,!1);