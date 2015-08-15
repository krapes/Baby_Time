var main = function(){
	
	$('.btn').click(function() {
		$('.pitch').fadeOut(600);
		$('.banner').fadeOut(600, function(){
			$('.calander').fadeIn(600);
		});

	});
}

$(document).ready(main);