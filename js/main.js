

/* ============================ Stiky Navbar==================================== */
$('.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });


  $(window).on("scroll",function(){
    if($(window).scrollTop()){
        $('nav').addClass('stickyMe');
    }
    else{
        $('nav').removeClass('stickyMe');
    }
});
/* ============================ /Sticky Navbar==================================== */

/* ============================ scroll TO Top==================================== */

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* ============================ Scroll To Top==================================== */
/* ============================ crausel==================================== */

$(document).ready(function() {
	$('.customer-logos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 1
				}
			}
			
		]
	});
});
/* ============================ /crausel==================================== */

/* =============================== change site color===================================== */
function openNav() {
	 document.getElementById("myNav").style.width = "15%";
   }
   
   function closeNav() {
	 document.getElementById("myNav").style.width = "0%";
   }
 
   	document.body.classList.add(localStorage.getItem("pageColor"));
	var element=document.querySelectorAll(".color-switcher li");
	var classesList=[];
    for(var i =0;i< element.length;i++){
	 classesList.push(element[i].getAttribute("color-data"));
	 element[i].addEventListener('click',function(){
		 document.body.classList.remove(...classesList);
		 document.body.classList.add(this.getAttribute("color-data"));
		 localStorage.setItem("pageColor",this.getAttribute("color-data"));
 
	 }, false);
 
 }

/* =============================== /change site color===================================== */

/* =============================== Header Background Image===================================== */

function changeBackground(){
	
	var headerImg=document.getElementsByClassName('header')[0];
	
	if(headerImg.checked ==true){
		console.log("hello");
		headerImg.style.backgroundImage = 'url(./images/rs-cover.jpg)';
	}
	else {
		headerImg.style.backgroundImage = '';
	}
}


/* =============================== /Header Background Image===================================== */



