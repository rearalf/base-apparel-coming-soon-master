const regularPhrase = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.querySelector('#email');
const errP = document.querySelector('#err-p');
const errImg = document.querySelector('#err-img');
const button = document.querySelector('#button');

button.addEventListener('click', e => {
	e.preventDefault();
	const emailValue = regularPhrase.exec(email.value.trim());
	if (emailValue) {
		errP.classList.remove('class', 'error');
		errImg.classList.remove('class', 'error');
		email.value = '';
		swal({
			title: "Thanks for register!",
			icon: 'success',
		});
	}
	else {
		errP.classList.add('class', 'error');
		errImg.classList.add('class', 'error');
	}
});
