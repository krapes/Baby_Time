var main = function(){
	
	$('.btn').click(function() {
		$('.pitch').fadeOut(600);
		$('.banner').fadeOut(600, function(){
			$('.calander').fadeIn(600);
		});
	});

	$('.btn_cal').click(function() {
		$('.pitch').fadeOut(600);
		$('.banner').fadeOut(600, function(){
			$('.calander').fadeIn(600);
		});

	});

	$('.btn_home').click(function() {
		$('.calander').fadeOut(600, function(){
			$('.pitch').fadeIn(600);
			$('.banner').fadeIn(600);
		
		});

	});


	
}

$(document).ready(main);