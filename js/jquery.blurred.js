//use $(window).scrollTop(); to figure out how far down the user has scrolled.

//use $(window).height(); to get the height of the user's window.

//Divide the $(window).height by the .scrollTop to make it into a percentage.

$(window).on('scroll',function(){

	//Getting the scroll percentage
	var $windowHeight = $(window).height();
	var $scrollHeight = $(window).scrollTop();
	var scrollPercentage =  ($scrollHeight / $windowHeight);

	//blur filter
	var maxBlur = 10; // the max blur it can be
	var blurRatio = 100 / maxBlur;
	var blurAmount = scrollPercentage * blurRatio; //for every 10% scrolled, blur it 1px
	
	//brightness filter
	var brightnessPercentage = 100 - Math.round(scrollPercentage * 100);
	
	//greyscale filter
	var grayscalePercentage = 0 + Math.round(scrollPercentage * 100);

	//opacity filter
	var opacityFilter =  100 - Math.round(scrollPercentage * 100);
	//var opacityFilter;
	console.log('The opacity is ' + opacityFilter); 

	//console.log("it should be blured " + blurAmount);
	//console.log("Brightness is ", brightnessPercentage);

	$('.top').css({
		'-webkit-filter' : 'blur('+blurAmount+'px) brightness('+ brightnessPercentage + '%) grayscale('+ grayscalePercentage + '%) opacity('+ opacityFilter + '%) '
		//'-webkit-filter': 'brightness('+ brightnessPercentage + '%)',  
		//'-webkit-filter': 'grayscale('+ grayscalePercentage + '%)'  
	});

	//console.log("blur ratio is  " + blurRatio);

});