$(document).ready(function(){
    changeNavbarColor();
});

$(window).scroll(function(){
    changeNavbarColor();
});

function changeNavbarColor() {
   var navHeight = $('#main-nav').height();
   var actualPos = $(document).scrollTop();
   
console.log(navHeight);
console.log(actualPos);
   
   
   if(actualPos > navHeight){
      $('#main-nav').addClass('bgcolor');
   } else {
      $('#main-nav').removeClass('bgcolor');
   }
   
}