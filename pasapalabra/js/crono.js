var crono = (function(){

	var time = 10;
	var timer = 0;

	var discount = function() {
		if (time > 0) {
			time--;
		} else {
			core.finishByCrono();
			time = 10;
		}
	}

	var showCrono = function() {
		var cronoT = document.getElementById('crono');
		cronoT.innerHTML = time;
	}

	var counterDown = function() {
		discount();
		showCrono();
	}


	var actOrDeact = function() {
		if (timer !== 0) {
			clearInterval(timer);
			timer = 0;
		} else {
			if (time == 10) {
				timer = setInterval(counterDown,1000);
			} else {
				time = 10;
				showCrono();
			
			}	
		}
	}
	return {
		actOrDeact,
		showCrono
	};
})();