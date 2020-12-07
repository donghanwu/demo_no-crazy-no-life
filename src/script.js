$(window).scroll(function(evt){ 
  if($(window).scrollTop()>590)
    $(".navbar").removeClass("navbar-top");
    
  else
    $(".navbar").addClass("navbar-top");
});

var s = skrollr.init();

// document.body.id = "skrollr-body“