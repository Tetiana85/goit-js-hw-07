import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(array) {
  return array.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  ).join('');
}

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: "alt",
  captionDelay: 250,
});

