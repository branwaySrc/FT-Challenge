// 이메일 입력 필드 진입&벗어날 때 경고 메시지 숨기기입니다.
const emailInput = document.getElementById("emailInput");
const warningEmailText = document.getElementById("emailInputWarning");
warningEmailText.style.display = "none";

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

// 비밀번호 입력 필드 진입&벗어날 때 경고 메시지 숨기기입니다.
const pwInput = document.getElementById("pwInput");
const warningPwText = document.getElementById("pwInputWarning");
warningPwText.style.display = "none";

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

// 오버레이 버튼 상호작용입니다.
document.getElementById("openOverlayBtn").addEventListener("click", function () {
	document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeOverlayBtn").addEventListener("click", function () {
	document.getElementById("overlay").style.display = "none";
});

document.getElementById("sendVerificationBtn").addEventListener("click", function () {
	document.getElementById("codeSentOverlay").style.display = "flex";
});

document.getElementById("closeSuccessBtn").addEventListener("click", function () {
	document.getElementById("codeSentOverlay").style.display = "none";
});
