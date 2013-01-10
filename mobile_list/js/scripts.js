$(document).ready( function() {
  
//  (function($) {
//      
//    var allPanels = $('#list ul.drop_down').hide();
//      
//    $('ul#list li a').click(function() {
//      allPanels.slideUp();
//      $(this).next().slideDown();
//      return false;
//    });
//  
//  })(jQuery);
  
  
  $('ul#list li a').click(function() {
    var allPanels = $('#list li a.active');
    $(this).toggleClass("active")
    allPanels.removeClass("active")
  })
  	
});