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
	
	onImagesLoaded(document.getElementById("b_2721515"), function() {
		var elements = document.getElementById("b_2721515").getElementsByClassName('js-bnfy');
		for (var i=0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		
		setInterval(function () {
			replayAnimations();
		}, 15000);
		
		function replayAnimations() {
			var banner = document.getElementById("b_2721515");
			var children = banner.childNodes;
			for (var i = 0; i < children.length; i++) {
				var cloned = children[i].cloneNode(true);
				banner.replaceChild(cloned, children[i]);
			}
		}
	});
	document.getElementById('b_2721515').addEventListener('click', function () {
		window.open(window.clickTag);
	});})();