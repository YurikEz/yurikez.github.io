window.onload = function() {	

// START smooth link
	// собираем все якоря; устанавливаем время анимации и количество кадров
	const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 300,
	framesCount = 20;
	
	anchors.forEach(function(item) {
		// каждому якорю присваиваем обработчик события
		item.addEventListener('click', function(e) {
			// убираем стандартное поведение
			e.preventDefault();
			// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
			let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
			// запускаем интервал, в котором
			let scroller = setInterval(function() {
				// считаем на сколько скроллить за 1 такт
		    	let scrollBy = coordY / framesCount;
		    	// если к-во пикселей для скролла за 1 такт больше расстояния до элемента и дно страницы не достигнуто
		    	if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
		    		// то скроллим на к-во пикселей, которое соответствует одному такту
		    		window.scrollBy(0, scrollBy);
		    		// Выходим из интервала после завершения времени анимации, что бы не оказаться в бесконечном цикле при невозможности достигнуть координаты элемента (coordY)
		    		setTimeout(function() {
		    			clearInterval(scroller);
		    		}, animationTime + 100);
		    		// если число пикселей про скролленого документа (window.pageYOffset) равна или больше координате элемента (coordY), то выходим из интервала
					if(window.pageYOffset >= coordY) {
						window.scrollTo(0, coordY);
						clearInterval(scroller);
					}
		    	// иначе добираемся до элемента и выходим из интервала
		    	} else {
		    		window.scrollTo(0, coordY);
		    		clearInterval(scroller);
		    	}
		    // время интервала равняется частному от времени анимации и к-ва кадров
			}, animationTime / framesCount);
		});
	});
// END smooth link

}