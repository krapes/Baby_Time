
var main = function(){
	console.log("Start main");
	var mql = window.matchMedia("(min-width: 1200px)");
	mql.addListener(handleWidthChange);
	handleWidthChange(mql);
	
	$('.btn, #btn_cal').click(calIn);
	$('#btn_home').click(homeIn);
	$('m').hover(
		function(){
			$(this).css('background-color', '#B7D5F3');
		},
		function(){
			$(this).css('background-color','#E3EAF1')
		}
	);

}


var calIn = function() {
		$('.banner, .pitch').fadeOut(600, function(){
			$('.calander').fadeIn(600);
		});
	}

var homeIn = function() {
		$('.calander').fadeOut(600, function(){
			$('.pitch, .banner').fadeIn(600);
		});
	}

var viewAll = function(){
	$('.pitch, .banner').fadeIn(600);
	$('.calander').fadeIn(600);
}

var handleWidthChange = function(mql)
	{if (mql.matches) /* The viewport is currently > 1200px */
		{	$('.art').before($('.nav_bar'));
			homeIn();
		}
    
    else /* The viewport is currently < 1200px */
    {   
    	$('.sixteen').after($('.nav_bar')); 
    	viewAll();
    }

}

$(document).ready(main);