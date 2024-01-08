import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// тут створення галереї 
const galleryList = document.querySelector(".gallery");
// console.log(galleryList);

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
);

galleryList.insertAdjacentHTML("beforeend", markup.join(""));


// тут делегування подій
galleryList.addEventListener("click", onClick);

let instance = basicLightbox.create("");

function onClick(evt) {
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("gallery__image")) {
        return;
    }

    // тут робота з бібліотекою модального вікна basicLightbox
    instance = basicLightbox.create(`<img class="gallery__image" 
    src="${target.getAttribute("data-source")}" 
    alt="${target.alt}"/>`);

    // console.log(instance);
    // onShow: (instance) => {
    //     instance = basicLightbox.create(`<img class="gallery__image" 
    //     src="${target.getAttribute("data-source")}" 
    //     alt="${target.alt}"/>`);
    // };

    instance.show();
};

// тут закриття зображень з клавіатури кнопкою Escape
galleryList.addEventListener("keydown", (evtClose) => {
    if (evtClose.key === "Escape") {
        instance.close();
    };
});
// onClose: (instance) => {
//     galleryList.addEventListener("keydown", (evtClose) => {
//         if (evtClose.key === "Escape") {
//             instance.close();
//         };
//     });
// };


// Правильна реалізація додавання і видалення слухачів для window в завданні 1 вимагає застосування цих опцій
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	// onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	// onClose: (instance) => {}
// https://github.com/electerious/basicLightbox#readme





// ============================================
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);
// instance.show();