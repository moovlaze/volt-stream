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

const slider = (selector) => {
	const swiper = new Swiper(selector, {
		slidesPerView: "auto",
		spaceBetween: 30,
		navigation: {
			nextEl: ".arrows__rigth",
			prevEl: ".arrows__left",
		},
		disabledClass: ".arrows__left",
	});
};

const galleryOpenAndClose = () => {
	const body = document.querySelector("body");
	const galleryItem = document.querySelectorAll(".gallery-wrapper img");

	galleryItem.forEach((item) => {
		item.addEventListener("click", () => {
			let imgSrc = item.getAttribute("src");
			let imgAlt = item.getAttribute("alt");

			body.insertAdjacentHTML(
				"beforeend",
				`
			<div class="gallery-box">
				<img src="${imgSrc}" alt="${imgAlt}">
			</div>
			`
			);

			closeGallery();
		});
	});

	const closeGallery = () => {
		const galleryBody = document.querySelector(".gallery-box");

		galleryBody.addEventListener("click", (e) => {
			let newImg = galleryBody.querySelector("img");

			if (e.target !== newImg) {
				galleryBody.remove(body);
			}
		});
	};
};

openBurger();
slider(".reviews__slider");
galleryOpenAndClose();
