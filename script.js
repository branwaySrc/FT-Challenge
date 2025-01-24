const refreshBtns = document.querySelectorAll(".jsRefreshAction");
const copyBtns = document.querySelectorAll(".jsCopyBtn");
const popUpMessage = document.querySelector(".jsPopUp");
const copyValue = document.querySelector(".jsCopyValue");
const openLatestHistoryBtns = document.querySelectorAll(".jsLatestHistoryBtn");
const transactionList = document.querySelector(".jsTransactionSlider");
const goBackBtns = document.querySelectorAll(".jsGoBackBtn");

let toggleTransactionList = false;

refreshBtns.forEach(btn => {
	btn.addEventListener("click", function () {
		window.location.reload();
	});
});

goBackBtns.forEach(btn => {
	btn.addEventListener("click", function () {
		window.history.back();
	});
});

copyBtns.forEach(btn => {
	btn.addEventListener("click", function () {
		navigator.clipboard
			.writeText(copyValue.innerHTML)
			.then(() => {
				popUpMessage.style.opacity = "1";
				setTimeout(() => {
					popUpMessage.style.opacity = "0";
				}, 3000);
			})
			.catch(error => {
				console.error(error);
			});
	});
});

openLatestHistoryBtns.forEach(function (button) {
	button.addEventListener("click", function () {
		if (!toggleTransactionList) {
			transactionList.style.transform = "translateY(0px)";
			transactionList.style.transition = "transform 0.3s ease-in-out";
			toggleTransactionList = true;
		} else {
			transactionList.style.transform = "translateY(-200%)";
			toggleTransactionList = false;
		}
	});
});

const openMenuBtns = document.querySelectorAll(".jsMenuBtn");
const closeMenuBtns = document.querySelectorAll(".jsCloseBtn");
const menuOverlays = document.querySelectorAll(".jsMenuOverlay");
const menuLists = document.querySelectorAll(".jsMenuList");
let showMenu = false;

openMenuBtns.forEach(function (openMenuBtn) {
	openMenuBtn.addEventListener("click", function () {
		if (!showMenu) {
			menuOverlays.forEach(function (menuOverlay) {
				menuOverlay.style.display = "flex";
			});
			menuLists.forEach(function (menuList) {
				menuList.style.transform = "translateX(0px)";
				menuList.style.opacity = "1";
				menuList.style.transition = "transform 0.3s ease-in-out";
			});
			showMenu = true;
			console.log("Menu opened");
		} else {
			menuLists.forEach(function (menuList) {
				menuList.style.transform = "translateX(-100%)";
				menuList.style.opacity = "0";
				menuList.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
				menuList.addEventListener("transitionend", function () {
					menuOverlays.forEach(function (menuOverlay) {
						menuOverlay.style.display = "none";
					});
				});
			});
			showMenu = false;
			console.log("Menu closed");
		}
	});
});

menuOverlays.forEach(function (menuOverlay) {
	menuOverlay.addEventListener("click", function () {
		menuLists.forEach(function (menuList) {
			menuList.style.transform = "translateX(-200%)";
			menuList.style.opacity = "0";
			menuList.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
			menuList.addEventListener("transitionend", function () {
				menuOverlay.style.display = "none";
			});
		});
		showMenu = false;
	});
});
