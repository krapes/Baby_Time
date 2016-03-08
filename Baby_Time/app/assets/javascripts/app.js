
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
	$('.nav, .social').hover(
		function(){
			$(this).css('text-shadow', '10px 10px 10px rgba(183, 213, 243, 0.55)');
		},
		function(){
			$(this).css('text-shadow', '10px 10px 10px rgba(170, 170, 170, 0.55)')
		}
	);
	
	$(document).click(handleInput);


	
	
	
		


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

var openForm = function(e){
	var divToCopy = $(e);
	while (!$('m').is(divToCopy))
	{divToCopy = divToCopy.parent();}
	var info = $(divToCopy).contents().clone()
	$('.input').append(info).fadeIn(600);
	$('.input').children('div').fadeIn(600);

}

var closeForm = function(){
	$('.input').contents().remove();
	$('.input').fadeOut(600);
}

var handleInput = function (e)
	{
		var display = $('.input').css('display') == 'block';
		var mTarget = $('m').is(e.target)  || $('m').has(e.target).length != 0;
		var inputTarget = $('.input').is(e.target)  || $('.input').has(e.target).length != 0;
		if (!display && mTarget)
			{openForm(e.target);}
		else if (display && !inputTarget )
	    {closeForm();}
	}

$(document).ready(main);