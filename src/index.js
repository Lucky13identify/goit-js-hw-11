import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';

import { createMarkup } from './js/createMarkup';
import { foreverScroll } from './js/foreverScroll';

// doodle

// Simplelightbox
// comment

const buttonMore = document.querySelector('.load-more');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

window.addEventListener('scroll', foreverScroll);

form.addEventListener('submit', e => {
  e.preventDefault();

  gallery.innerHTML = '';

  // **** You could unlock it for button loading (also html and createMarkup.js too) ****

  // buttonMore.classList.add('visually-hidden');

  createMarkup('afterbegin');
});

// **** You could unlock it for button loading (also html and createMarkup.js too) ****

// buttonMore.addEventListener('click', () => {
//   createMarkup('beforeend');
// });

// buttonMore.classList.add('visually-hidden');

const lightbox = new SimpleLightbox('.gallery a', {});
lightbox.on('show.simplelightbox', function () {});
