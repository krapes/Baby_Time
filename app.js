var main = function(){
	
	$('.btn').click(function() {
		$('.pitch').fadeOut(600);
		//$('.txt1').fadeOut(600);
		//$('.txt2').fadeOut(600);
		$('.banner').fadeOut(600);
		//$('.calander').fadeIn(600).addClass('flexbox');
		//$('.calander').fadeIn(600);
		$('.calander').css('visibility', 'visible');
		

	});
}

$(document).ready(main);