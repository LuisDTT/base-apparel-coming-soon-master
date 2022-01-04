document.querySelector(".info__form-btn").addEventListener("click",(e)=>{

	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	const email = document.querySelector(".info__form-email");

	if (!emailRegex.test(email.value)) {
		e.preventDefault();

		document.querySelector(".info__form-icon-error").style.display = "initial"
		document.querySelector(".info__form-text-error").style.display = "inherit"
		email.style.border = "2px solid hsl(0, 93%, 55%)";

	}
})
