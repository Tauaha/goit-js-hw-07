import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');
const imagesElements = createGalleryImgElements(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesElements);


console.log(createGalleryImgElements(galleryItems));
function createGalleryImgElements (galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join(' ');
   
};

galleryEl.addEventListener('click', zoomImageHandler);

function zoomImageHandler(event){
if (event.target.nodeName !== 'IMG') {
    return;
}else {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="900">
`);

 instance.show();
 window.addEventListener('keydown', closeModalHandler);
function closeModalHandler(event){
  instance.close();
}}};


