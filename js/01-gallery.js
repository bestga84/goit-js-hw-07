import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// тут створення галереї 
const galleryList = document.querySelector(".gallery");
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

galleryList.insertAdjacentHTML("afterbegin", markup.join(""));


// тут делегування подій
galleryList.addEventListener("click", onClick);

function onClick(evt) {
    const {target} = evt;
    if (!target.classList.contains("gallery__item")) {
        return;
    }

    const descriptionImage = target.dataset.description 
        ?? target.closest("gallery__item").dataset.description;
    // console.log(descriptionImage);

    const currentItem = galleryItems.find(({description}) => 
        description === descriptionImage);
    // console.log(currentItem);

    // тут працюємо з бібліотекою модального вікна basicLightbox
    const instance = basicLightbox.create("");
    evt.preventDefault();
    instance = basicLightbox.create(`<img class="gallery__image"
    src="${target.getAttribute("data-source")}"
    alt="${target.alt}"/>`);
    // alleryList.addEventListener("keydown", (evt) => {
    //     if (evt.key === "Escape" ) {
    //         instance.close();
    //     };
    // };
};