//for parallax
  var rellax = new Rellax('.rellax');

  $(function() {
  	$('.globalNavList a').click(function() {
  		// $('.globalNavList a').attr('class', '')
  		// $(this).attr('class', 'on')
  		var speed = 500
  		var href = $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var position = 0
	    if(href === '#priceArea') {
				position = target.offset().top - 1600;
	    } else if(href === '#thirdArea') {
				position = target.offset().top - 500;
	    } else { 
	 	    position = target.offset().top - 280;
	    }
	    $("html, body").animate({scrollTop:position}, speed, "swing");
	    return false;
  	})
  })