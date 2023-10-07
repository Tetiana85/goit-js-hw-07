import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const markup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
        `;
    })
    .join('');
};

function onImageClick(event) {
    event.preventDefault();

    if(!event.target.classList.contains('gallery__image')) {
        return;
    }

    const modalWindow = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
    `);

    modalWindow.show();

    window.addEventListener('keydown', onEscapePress);

    function onEscapePress(event) {
        if (event.code === 'Escape') {
        modalWindow.close();

        window.removeEventListener('keydown', onEscapePress);
        }
    };
};