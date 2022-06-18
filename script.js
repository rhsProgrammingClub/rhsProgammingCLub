cardlist = document.querySelectorAll(".Hansoncard");




cardlist.forEach(function (card) {
	var bgcolor = getComputedStyle(card).getPropertyValue('--card-color');
	var isenter = false;
	card.addEventListener('mousemove', function (e) {
		if(isenter){
			card.style.transition = "transform 0.1s";
			let xpos = e.pageX - card.offsetLeft;
			let ypos = e.pageY - card.offsetTop;
			let xy = xpos + " " + ypos;
			let ratio = card.offsetWidth/15*card.offsetHeight/card.offsetWidth
			let rotx = (card.offsetWidth / 2 - xpos) / ratio;
			let roty = (card.offsetHeight / 2 - ypos) / ratio;
			
			let bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 200, from(rgba(255,255,255,0.2)), to(rgba(255,255,255,0.0))), " + bgcolor;

			card.style.transform = "scale3D(1.05,1.05,1.05) rotateY(" + rotx + "deg) rotateX(" + roty + "deg) translateZ(20px)";
			card.style.background = bgWebKit;
		}

	});	
	card.addEventListener("mouseenter", function(e){
		isenter = true;
		card.style.transition = "transform 0.1s";
		let xpos = e.pageX - card.offsetLeft;
		let ypos = e.pageY - card.offsetTop;
		let ratio = card.offsetWidth/15*card.offsetHeight/card.offsetWidth
		let rotx = (card.offsetWidth / 2 - xpos) / ratio;
		let roty = (card.offsetHeight / 2 - ypos) / ratio;
		
		card.style.transform = "scale3D(1.05,1.05,1.05) rotateY(" + rotx + "deg) rotateX(" + roty + "deg) translateZ(20px)";
	});
	card.addEventListener('mouseleave', function (e) {
		isenter = false;
	card.style.background = bgcolor;
		card.style.transition = "transform 0.5s"
		card.style.transform = "none";
	});



});

