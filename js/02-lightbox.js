import { galleryItems } from './gallery-items.js';
// Change code below this line
const images = galleryItems.reduce(
  (acc, { preview, description, original }) => {
    acc += `<li class="gallery__item">
<a class="gallery__link" href="${original}"> <img  class="gallery__image" src="${preview}"  alt="${description}" /> </a> </li>`;
    return acc;
  },
  ''
);
let instance;

const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', '<ul></ul>');
container.insertAdjacentHTML(
  'afterbegin',
  `  ${images} </a>
`
);

const lightBox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightBox.on('show.simplelightbox');

console.log(galleryItems);
