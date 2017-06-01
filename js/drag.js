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

					var xOffset = block.offsetWidth / 2;
					
					var yOffset = block.offsetHeight / 2;

					console.log(yOffset);

					console.log(block);

					xCord = event.clientX;
					yCord = event.clientY;

					document.getElementById('x-coord').textContent = xCord + 'px';
					document.getElementById('y-coord').textContent = yCord + 'px';



					yCord = yCord - yOffset;
					xCord = xCord - xOffset;

					var pos = 'top: ' + yCord + "px; left: " + xCord + "px;";

					block.setAttribute('style', pos);

				}
				
			});
		}
		
	});

	document.addEventListener('mouseup', function(event) {
		moving = false;
	});

});
