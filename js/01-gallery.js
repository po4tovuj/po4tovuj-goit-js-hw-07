import { galleryItems } from './gallery-items.js';
// Change code below this line
const images = galleryItems.reduce(
  (acc, { preview, description, original }) => {
    acc += `<div class="gallery__item">
<a class="gallery__link" href="#" target="_self"> <img  class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`;
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

const closeOnEcapeClick = (e) => {
  if (instance.visible() && e.key === 'Escape') {
    instance.close();
    container.removeEventListener('keydown', closeOnEcapeClick);
  }
};

const showModal = ({ target, currentTarget }) => {
  console.log(target.nodeName);
  if (target.nodeName === 'IMG') {
    const url = target.getAttribute('data-source');
    const alt = target.getAttribute('alt');
    instance = basicLightbox.create(
      `<img width="800", heigth="600" src=${url} alt=${alt}>`,
      {
        onShow: (instance) => {
          container.addEventListener('keydown', closeOnEcapeClick);
        },
        onClose: (instance) => {
          container.removeEventListener('keydown', closeOnEcapeClick);
        },
      }
    );
    instance.show();
  }
};

// To remove the listener, use the normal routine:
container.addEventListener('click', showModal);
