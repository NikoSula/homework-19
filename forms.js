const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".open-sign-in");
const personalNumber = document.querySelector("#personal-number");
const personalNumberError = document.querySelector("#number-error");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-error");
const jobDescription = document.querySelector("#text");
const jobDescriptionError = document.querySelector("#text-error");

// closeModal.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function modalAction(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	modal.classList.add("open");
	closeBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}

function isUserNameValid() {
	if (/^\s*$/.test(username.value)) {
		userNameError.innerText = "username is required";
		username.classList.remove("correct");
		username.classList.add("error");
		return false;
	} else {
		userNameError.innerText = "";
		username.classList.remove("error");
		username.classList.add("correct");
		return true;
	}
}

function isEmailValid() {
	// if (!email.validity.valid) {
	// 	emailError.innerText = "email not valid";
	// 	email.classList.remove("correct");
	// 	email.classList.add("error");
	// } else {
	// 	emailError.innerText = "";
	// 	email.classList.remove("error");
	// 	email.classList.add("correct");
	// }

	if (/^\s*$/.test(email.value)) {
		emailError.innerText = "email is required";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else if (!/@gmail.com$/.test(email.value)) {
		emailError.innerText = "email must be gmail";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else {
		emailError.innerText = "";
		email.classList.remove("error");
		email.classList.add("correct");
		return true;
	}
}

function isPasswordValid() {
	if (password.value.length < 8) {
		password.classList.remove("correct");
		password.classList.add("error");
		passError.innerText = "password must be at least 8 char";
		return false;
	} else {
		passError.innerText = "";
		password.classList.remove("error");
		password.classList.add("correct");
		return true;
	}
}

username.addEventListener("input", isUserNameValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// console.log(
	// 	/[0-9]/.test(password.value),
	// 	/[a-z]/.test(password.value),
	// 	password.value
	// );

	const isUNValid = isUserNameValid();
	const isEValid = isEmailValid();
	const isPValid = isPasswordValid();

	// console.log(isUNValid, isEValid, isPValid);

	if (isUNValid && isEValid && isPValid) {
		// console.log("submit form");
		// form.submit();
		form.reset();
		inputs.forEach((el) => el.classList.remove("correct"));
		// modal.classList.add("open");
		modalAction("#sign-up-modal");
	}
});

btn.addEventListener("click", () => {
	modalAction("#sign-up-modal");
});



function isPersonalNumberValid() {
	const numbers = /^[0-9]+$/;
    if (!personalNumber.value.match(numbers)) {
		personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		personalNumberError.innerText = "Please input numeric characters only";
		return false;
	} else if(personalNumber.value.length < 11 || personalNumber.value.length > 11){
        personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		personalNumberError.innerText = "personal number must contain 11 characters";
		return false;
    }else{
		personalNumberError.innerText = "";
		personalNumber.classList.remove("error");
		personalNumber.classList.add("correct");
		return true;
	}
}

function isPhoneValid() {
	if (phone.value.length < 9 || phone.value.length > 9) {
		phone.classList.remove("correct");
		phone.classList.add("error");
		phoneError.innerText = "Phone number must contain 9 characters";
		return false;
	} else{
		phoneError.innerText = "";
		phone.classList.remove("error");
		phone.classList.add("correct");
		return true;
	}
}


function isJobDescriptionValid() {
	if (jobDescription.value.length > 50) {
		jobDescription.classList.remove("correct");
		jobDescription.classList.add("error");
		jobDescriptionError.innerText = "maximum number of characters must be 50";
		return false;
	} else{
		jobDescriptionError.innerText = "";
		jobDescription.classList.remove("error");
		jobDescription.classList.add("correct");
		return true;
	}
}






personalNumber.addEventListener("input", isPersonalNumberValid);
phone.addEventListener("input", isPhoneValid);
jobDescription.addEventListener("input", isJobDescriptionValid);