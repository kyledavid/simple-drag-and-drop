"use strict"

document.addEventListener('DOMContentLoaded', function() {

	var xCord = 0;
	var yCord = 0;
	var moving = false;

	document.addEventListener('mousedown', function(event) {

		var target = event.target;

		if (target.classList.contains('draggable')) {
			moving = true;
			var block = target;

			block.addEventListener('mousemove', function(event) {

				if (moving) {

					console.log(block);

					xCord = event.clientX;
					yCord = event.clientY;

					document.getElementById('x-coord').textContent = xCord + 'px';
					document.getElementById('y-coord').textContent = yCord + 'px';

					var pos = 'top: ' + yCord + "px; left: " + xCord + "px;";

					block.setAttribute('style', pos);

				}
				
			});
		}
		

		

		

		if (target.classList.contains('draggable')) {
			target.style.backgroundColor = "black";
		}

		
	});

	document.addEventListener('mouseup', function(event) {
		moving = false;
	});

});
