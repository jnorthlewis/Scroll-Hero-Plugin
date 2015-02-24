//use $(window).scrollTop(); to figure out how far down the user has scrolled.

//use $(window).height(); to get the height of the user's window.

//Divide the $(window).height by the .scrollTop to make it into a percentage.

$(window).on('scroll',function(){

	var $windowHeight = $(window).height();
	var $scrollHeight = $(window).scrollTop();

	var $scrollPercentage =  ($scrollHeight / $windowHeight);

	var maxBlur = 10; // the max blur it can be
	var blurRatio = 100 / maxBlur;
	var blurAmount = $scrollPercentage * blurRatio; 
	// for every 10% scrolled, blur it 1px

	console.log("it should be blured " + blurAmount);
	$('.top').css({
		'-webkit-filter' : 'blur('+blurAmount+'px)'
	});
	console.log("blur ratio is  " + blurRatio);

});