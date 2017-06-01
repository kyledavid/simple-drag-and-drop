"use strict"

document.addEventListener('DOMContentLoaded', function() {

	var xCord = 0;
	var yCord = 0;
	var moving = false;

	document.addEventListener('mousedown', function(event) {

		var target = event.target;

		moving = true;

		document.addEventListener('mousemove', function(event) {

			if (moving) {

				xCord = event.clientX;
				yCord = event.clientY;

				document.getElementById('x-coord').textContent = xCord;
				document.getElementById('y-coord').textContent = yCord;
			}
			
		});

		console.log(target);

		if (target.classList.contains('draggable')) {
			target.style.backgroundColor = "black";
		}

		
	});

	document.addEventListener('mouseup', function(event) {
		moving = false;
	});

});
