//use $(window).scrollTop(); to figure out how far down the user has scrolled.

//use $(window).height(); to get the height of the user's window.

//Divide the $(window).height by the .scrollTop to make it into a percentage.

$(window).on('scroll',function(){

	var $windowHeight = $(window).height();
	var $scrollHeight = $(window).scrollTop();
	var scrollPercentage =  ($scrollHeight / $windowHeight);

	var maxBlur = 10; // the max blur it can be
	var blurRatio = 100 / maxBlur;
	var blurAmount = scrollPercentage * blurRatio; 
	// for every 10% scrolled, blur it 1px

	//var maxDark = 0; // the max blur it can be
	//var darkRatio = 0.5 / maxDark;
	//var darkAmount = scrollPercentage * darkRatio; 
	// for every 10% scrolled, darken it 1%
	console.log(scrollPercentage);

	var brightnessPercentage = 100 - Math.round(scrollPercentage * 100);

	console.log("it should be blured " + blurAmount);
	console.log("Brightness is ", brightnessPercentage);

	$('.top').css({
		'-webkit-filter' : 'blur('+blurAmount+'px)',
		'-webkit-filter': 'brightness('+ brightnessPercentage + '%)'  
	});

	console.log("blur ratio is  " + blurRatio);

});