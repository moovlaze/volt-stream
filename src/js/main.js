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

const slider = (selector, arrowNext, arrowPrev) => {
	const swiper = new Swiper(selector, {
		slidesPerView: "auto",
		spaceBetween: 30,
		navigation: {
			nextEl: arrowNext,
			prevEl: arrowPrev,
		},
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

const accordion = () => {
	const accordions = document.querySelectorAll(
		"[data-accordion-1] [data-accordion-item]"
	);

	accordions.forEach((el) => {
		el.addEventListener("click", (e) => {
			const content = el.querySelector(".accordion__content");

			if (el.classList.contains("accordion_open")) {
				el.classList.remove("accordion_open");
			} else {
				accordions.forEach((item) => {
					item.classList.remove("accordion_open");
					item.querySelector(".accordion__content").style.maxHeight = null;
				});
				el.classList.add("accordion_open");
			}

			if (el.classList.contains("accordion_open")) {
				content.style.maxHeight = content.scrollHeight + "px";
			} else {
				content.style.maxHeight = null;
			}
		});
	});
};

openBurger();
slider(".reviews__slider", ".reviews__arrow-rigth", ".reviews__arrow-left");
slider(".works__slider", ".works__arrow-rigth", ".works__arrow-left");
slider(
	".certificates__slider",
	".certificates__arrow-rigth",
	".certificates__arrow-left"
);
galleryOpenAndClose();
accordion();
