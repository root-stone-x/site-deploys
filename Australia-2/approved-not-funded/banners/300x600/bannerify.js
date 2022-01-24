(function () {
	function onImagesLoaded(container, event) {
		var images = container.getElementsByTagName("img");
		var loaded = images.length;
		for (var i = 0; i < images.length; i++) {
			if (images[i].complete) {
				loaded--;
			}
			else {
				images[i].addEventListener("load", function() {
					loaded--;
					if (loaded == 0) {
						event();
					}
				});
			}
			if (loaded == 0) {
				event();
			}
		}
	}
	
	onImagesLoaded(document.getElementById("b_102367"), function() {
		var elements = document.getElementById("b_102367").getElementsByClassName('js-bnfy');
		for (var i=0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
	});
	document.getElementById('b_102367').addEventListener('click', function () {
		window.open(window.clickTag);
	});})();