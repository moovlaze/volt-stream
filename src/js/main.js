const openBurger = () => {
	const wrapper = document.querySelector(".wrapper");
	const headerWrapper = document.querySelector(".header__wrapper");
	const links = document.querySelectorAll(".menu-header .menu-header__link");
	const burger = document.querySelector(".burger");

	burger.addEventListener("click", () => {
		wrapper.classList.toggle("wrapper_lock");
		headerWrapper.classList.toggle("header__wrapper_active");
		burger.classList.toggle("burger_active");
	});

	links.forEach((item) => {
		item.addEventListener("click", () => {
			wrapper.classList.remove("wrapper_lock");
			headerWrapper.classList.remove("header__wrapper_active");
			burger.classList.remove("burger_active");
		});
	});
};

openBurger();
