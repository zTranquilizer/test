function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll('.forecasts__tab').forEach((item) => {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			const id = e.target.getAttribute("href").replace("#", '');
			document.querySelectorAll('.forecasts__tab').forEach((child) => {
				child.classList.remove('active');
			});
			document.querySelectorAll('.content-forecasts__cards').forEach((child) => {
				child.classList.remove('active');
			});
			item.classList.add('active');
			document.getElementById(id).classList.add('active');

		})
	});
	document.querySelector('.forecasts__tab').click();
});
