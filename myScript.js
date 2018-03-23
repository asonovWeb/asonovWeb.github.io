window.onload = function(){
/*=============Бутерброд Меню===============*/
	var razmer,
	style2,
	byterbrod = document.getElementById('byterbrod'),
	nav = document.getElementById('navigaciya'),
	animaciya = "top: 15px;\
	transform: rotate(45deg);",
	animaciya2 = "top: 15px;\
	transform: rotate(-45deg);",
	span1 = document.getElementsByClassName('span1')[0],
	span2 = document.getElementsByClassName('span2')[0],
	span3 = document.getElementsByClassName('span3')[0];
	console.log()
	byterbrod.addEventListener('click', function(e){
		e = e || window.event;
		e.target;
		style2 = getComputedStyle(nav);
		if(style2.height == '60px'){
			nav.style.height = 280 +'px';
			span1.style.cssText = animaciya;
			span2.style.opacity = 0;
			span3.style.cssText = animaciya2;
		}else{
			nav.style.height = '';
			span1.style.cssText = "";
			span2.style.opacity = "";
			span3.style.cssText = "";
		};
	},false);
	/*=сброс стилей высоты=*/
	window.onresize = function(e){
		e = e || window.event;
		razmer = document.body.clientWidth;
		if(razmer => 768){
			nav.style.height = '';
		};
	}
/*=================Слайдер 1===========================*/
var LeftArrow = document.getElementById('Left-Arrow'),
RightArrow = document.getElementById("Right-Arrow"),
cubeSlider = document.getElementById("cube"),
paginaciya = document.getElementById("paginaciya"),
Y = 0;
paginaciya.addEventListener("click", function(e){
	e = e || window.event;
	var addClass = e.target.getAttribute("class");
	if(addClass == "leftArr"){
		clearInterval(timerId);
		cubeSlider.style.transform = "rotateY(" + (Y += -90) + "deg)";
		if(Y == -360){
			cubeSlider.style.transform = "rotateY(0deg)";
			Y = 0;
		};
	}else if(addClass == "rightArr"){
		clearInterval(timerId);
		cubeSlider.style.transform = "rotateY(" + (Y += 90) + "deg)";
		if(Y == 360){
			cubeSlider.style.transform = "rotateY(0deg)";
			Y = 0;
		};
	};

}, false)

	var timerId = setInterval(function(){
		cubeSlider.style.transform = "rotateY(" + (Y += -90) + "deg)";
			if(Y == -360){
				cubeSlider.style.transform = "rotateY(0deg)";
				Y = 0;
			};
	}, 3000);






/*==================Скролл к якорю=====================*/
	var scrolMemory = 0;
	window.onscroll = function(){
		scrolMemory = window.pageYOffset || document.documentElement.scrollTop;
	}
	var menu = document.getElementById('menu');
	var offsetTopPx,
	scrollTOBY = 50;
	var timerId2;
	menu.addEventListener('click', function(e){
		e = e || window.event;
		e.target;
		var section = document.getElementsByTagName('section');
		if(e.target.hasAttribute('href')){
			e.preventDefault();
			for(var i = 0; i < section.length; i++){
				if(section[i].id == e.target.getAttribute('href')){
					offsetTopPx = section[i].offsetTop;
					if(scrolMemory < offsetTopPx){
							timerId2 = setInterval(function(){
							window.scrollBy(0, scrollTOBY);
							delayEto();
						},10);
					};
				};
			};
		};
	},false);
	function delayEto(){
		if(scrolMemory >= offsetTopPx - 75){
			clearInterval(timerId2);
			nav.style.height = '';
			span1.style.cssText = "";
			span2.style.opacity = "";
			span3.style.cssText = "";
		};
	}

/*============Shop_preloader=============*/
	var showAll = document.getElementsByClassName('showAll')[0],
	tovaru = document.getElementById("tovaru");
	showAll.addEventListener('click', function(e){
		e = e || window.event;
		e.preventDefault();
		var preloader = document.getElementById('single4');
		showAll.style.opacity = 0;
		if(showAll.style.opacity == 0){
			preloader.style.display = 'block';
		};
		setTimeout(function(){
			preloader.style.opacity = 0;
			showAll.style.display = 'none';
			tovaru.style.cssText = "display: flex;\
			opacity: 1;";
		}, 1500);
	}, false)
/*================Video================*/
	var video = document.getElementsByTagName('video')[0],
	play = document.getElementById('play');	
	video.addEventListener('click',function(e){
		if(video.paused){
			video.play();
			play.style.opacity = 0;
		}else{
			video.pause();
			play.style.opacity = 1;
		};
	},false);
	play.onclick = function(e){
		if(video.paused){
			video.play();
			play.style.opacity = 0;
		}else{
			video.pause();
			play.style.opacity = 1;
		};
	}
}

