import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery')

const galleryItemsMarkup = addItemsToGallery(galleryItems)

function addItemsToGallery(items) {
    return items.map(({ preview, original, description, }) =>     `
    <a 
    class="gallery__item"
    href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
    `).join('')
}

gallery.innerHTML = galleryItemsMarkup

gallery.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') {
        return;
    } else {
        event.preventDefault()
        
    let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
        gallery.on('show.simplelightbox', function () {
        });
    }
})

console.log(galleryItems);
