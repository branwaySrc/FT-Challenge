const emailInput = document.getElementById("emailInput");
const pwInput = document.getElementById("pwInput");
const warningEmailText = document.getElementById("emailInputWarning");
const warningPwText = document.getElementById("pwInputWarning");

warningEmailText.style.display = "none";
warningPwText.style.display = "none";

// 이메일 입력 필드 진입&벗어날 때 경고 메시지 숨기기입니다.
emailInput.addEventListener("input", function () {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (!emailPattern.test(emailInput.value)) {
		warningEmailText.style.display = "block";
	} else {
		warningEmailText.style.display = "none";
	}
});

emailInput.addEventListener("blur", function () {
	warningEmailText.style.display = "none";
});

// 이메일 입력 필드 진입&벗어날 때 경고 메시지 숨기기입니다.
pwInput.addEventListener("input", function () {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (!emailPattern.test(emailInput.value)) {
		warningPwText.style.display = "block";
	} else {
		warningPwText.style.display = "none";
	}
});

pwInput.addEventListener("blur", function () {
	warningPwText.style.display = "none";
});
