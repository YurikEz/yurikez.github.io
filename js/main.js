function initVK() {
	console.log('initVK');
	VK.init({
		apiId: 52847556
	});
}

function getGroups() {
	console.log('getGroups');
	VK.Api.call('groups.getById', {group_id: 61085083, v:"5.73"}, function(r) {
		if(r.response) {
		  console.log(r.response);
		}
	});
}

function getUser() {
	console.log('getUser');
	VK.Api.call('users.get', {user_ids: 162193407, v:"5.73"}, function(r) {
		if(r.response) {
			console.log('Привет, ' + r.response[0].first_name);
		}
	});
}

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
		    	if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
		    		// то скроллим на к-во пикселей, которое соответствует одному такту
		    		window.scrollBy(0, scrollBy);
		    		// Выходим из интервала после завершения времени анимации, что бы не оказаться в бесконечном цикле при невозможности достигнуть координаты элемента (coordY)
		    		setTimeout(function() {
		    			clearInterval(scroller);
		    		}, animationTime + 100);
		    		// если число пикселей про скролленого документа (window.pageYOffset) равна или больше координате элемента (coordY), то выходим из интервала
					if (window.pageYOffset >= coordY) {
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

// START Validate form
	let message = document.getElementById("message");
	let email = document.getElementById("email");
	let send = document.getElementById("send");

	let message_error = document.getElementById("message_error");
	let email_error = document.getElementById("email_error");


	let reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let reg_message = /^[а-яА-ЯёЁa-zA-Z0-9_\-\.\!\,\?]+$/;

	// обработчик ввода сообщения в форму id=message
	message.oninput = function() {
		if (message.value.length == 0) {
			message.style.border = "";
			message_error.style.display = "";
		} else if (reg_message.test(message.value) == false) {
			message.style.border = "2px solid red";
			message_error.style.display = "block";
		} else {
			message.style.border = "2px solid #6DB65B";
			message_error.style.display = "";
		}	
	};
	// обработчик ввода email в форму id=email
	email.oninput = function() {
		if (email.value.length == 0) {
			email.style.border = "";
			email_error.style.display = "";
		} else if (reg_email.test(email.value) == false) {
			email.style.border = "2px solid red";
			email_error.style.display = "block";
		} else {
			email.style.border = "2px solid #6DB65B";
			email_error.style.display = "";
		}
	};
	// обработчик нажатия кнопки отправки
	send.addEventListener('click', function(e) {
		// убираем стандартное поведение
		e.preventDefault();

		if (reg_email.test(email.value) == true && reg_message.test(message.value) == true) {
			alert('Сообщение отправлено!');
		} else {
			alert('Заполните все поля');
		}
	});
// END Validate form

// START Modal Image

	const image = [].slice.call(document.querySelectorAll('img[src*="img/work/min/"]'));

	let modal_image = document.getElementById("modal_image");
	let modal = document.getElementById("modal");

	let prev = document.getElementById("prev");
	let next = document.getElementById("next");
	let close = document.getElementById("close");

	image.forEach(function(item) {
		// каждому якорю присваиваем обработчик события
		item.addEventListener('click', function(e) {
			// убираем стандартное поведение
			e.preventDefault();

			let imageSrc = item.getAttribute('src');
			let imageAlt = item.getAttribute('alt');

			modal_image.setAttribute("src", imageSrc.replace("min", "large"));
			modal_image.setAttribute("alt", imageAlt);
			modal.style.display = "grid";

			// отслеживаем нажатие на кнопку id=prev, перелистываем слайд назад
			prev.addEventListener('click', function(e) {
				// убираем стандартное поведение
				e.preventDefault();

				let imageSrc = modal_image.getAttribute('src');
				let imageAlt = modal_image.getAttribute('alt');				
				if (imageSrc.charAt(20) - 1 > 0) {
					modal_image.setAttribute("src", imageSrc.replace(imageSrc.charAt(20), imageSrc.charAt(20) - 1));
					modal_image.setAttribute("alt", imageAlt.replace(imageAlt.charAt(5), imageAlt.charAt(5) - 1));
				} else {
					modal_image.setAttribute("src", imageSrc.replace(imageSrc.charAt(20), imageSrc.charAt(20) - 1 + image.length));
					modal_image.setAttribute("alt", imageAlt.replace(imageAlt.charAt(5), imageAlt.charAt(5) - 1 + image.length));
				}
			});

			// отслеживаем нажатие на кнопку id=next, перелистываем слайд вперед
			next.addEventListener('click', function(e) {
				// убираем стандартное поведение
				e.preventDefault();

				let imageSrc = modal_image.getAttribute('src');
				let imageAlt = modal_image.getAttribute('alt');				
				if (+imageSrc.charAt(20) + 1 <= image.length) {
					modal_image.setAttribute("src", imageSrc.replace(imageSrc.charAt(20), +imageSrc.charAt(20) + 1));
					modal_image.setAttribute("alt", imageAlt.replace(imageAlt.charAt(5), +imageAlt.charAt(5) + 1));
				} else {
					modal_image.setAttribute("src", imageSrc.replace(imageSrc.charAt(20), imageSrc.charAt(20) - image.length + 1));
					modal_image.setAttribute("alt", imageAlt.replace(imageAlt.charAt(5), imageAlt.charAt(5) - image.length + 1));
				}		
			});
			// отслеживаем нажатие на кнопку id=close, закрываем модальное окно
			close.addEventListener('click', function(e) {
				// убираем стандартное поведение
				e.preventDefault();

				modal.style.display = "";
			});
		});
	});
// END Modal Image
}