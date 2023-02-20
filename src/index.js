import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import Notiflix from 'notiflix';
import { createMarkup } from './js/createMarkup';

const buttonMore = document.querySelector('.load-more');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

let page = 1;

window.addEventListener('scroll', () => {
  foreverScroll();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  // **** You could unlock it for button loading (also html and createMarkup.js too) ****

  // buttonMore.classList.add('visually-hidden');

  page = 1;

  createMarkup('afterbegin', 1);
});

function foreverScroll() {
  const doc = document.documentElement.getBoundingClientRect();
  const user = document.documentElement.clientHeight;

  if (doc.bottom < user + 1 && doc.bottom !== 100) {
    setTimeout(() => {
      page += 1;
      console.log(page);
      createMarkup('beforeend', page).then(array => {
        if (array.length === 0) {
          return Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
      });
    }, 1000);
  }
}

// **** You could unlock it for button loading (also html and createMarkup.js too) ****

// buttonMore.addEventListener('click', () => {
//   createMarkup('beforeend');
// });

// buttonMore.classList.add('visually-hidden');
