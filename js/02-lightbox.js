import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// тут створення галереї 
const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
);
galleryList.insertAdjacentHTML("beforeend", markup.join(""));

// тут SimpleLightbox 
const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});


  // Розмітка картки за таким шаблоном
/*
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
*/


// Фрагмент галереї
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },