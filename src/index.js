import './css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { toGetResponse } from './js/serverResponse';

// doodle

// Simplelightbox
// axios библиотека
// CSS
// Scroll
// читстый код

// Получаем доступы

const axios = require('axios');

const buttonMore = document.querySelector('.load-more');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

buttonMore.classList.add('visually-hidden');

// Вешаем слушателей

form.addEventListener('submit', e => {
  e.preventDefault();

  gallery.innerHTML = '';
  buttonMore.classList.add('visually-hidden');

  createMarkup('afterbegin');
});

buttonMore.addEventListener('click', () => {
  createMarkup('beforeend');
});

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let page = 0;
// Пишем функции

// async function toGetResponse(name, click) {
//   try {
//     const LINK_KEY =
//       'https://pixabay.com/api/?key=33641597-af0dded98b621629426cb08e5';

//     const response = await axios.get(
//       `${LINK_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${click}&per_page=40`
//     );

//     if (response.data.hits.length === 0 && page === 1) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else if (response.data.hits.length >= 0) {
//       Notiflix.Notify.success(
//         `Hooray! We found ${response.data.totalHits} images.`
//       );
//     }

//     return await response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

async function createMarkup(place) {
  const promiseFoo = await toGetResponse(form[0].value, (page += 1));
  console.log(promiseFoo.hits.length);
  const markup = await promiseFoo.hits.map(item => {
    return gallery.insertAdjacentHTML(
      `${place}`,
      `<div class="photo-card">
  <a href="${item.largeImageURL}"
    ><img
      width="315px"
      heigh="315px"
      src="${item.webformatURL}"
      alt="${item.tags}"
      loading="lazy"
  /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b class ="number">${item.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b class ="number">${item.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b class ="number">${item.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b class ="number">${item.downloads}</b>
    </p>
  </div>
</div>`
    );
  });

  if (page >= 2) {
    autoscroll();
  }

  if (promiseFoo.hits.length === 0 && page >= 2) {
    return Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }

  const showButton = await buttonMore.classList.remove('visually-hidden');
  return markup;
}

// function MorePhotosToLoad() {
//   createMarkup('beforeend').then(item => {
//     if (item.length === 0) {
//       buttonMore.classList.add('visually-hidden');
//       return Notiflix.Notify.info(
//         "We're sorry, but you've reached the end of search results."
//       );
//     }
//   });
// }

// async function toGetPhotos(name) {
//   gallery.innerHTML = '';
//   buttonMore.classList.add('visually-hidden');

//   const LINK_KEY =
//     'https://pixabay.com/api/?key=33641597-af0dded98b621629426cb08e5';

//   // Идем на бэкЭнд

//   const response = await fetch(
//     `${LINK_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
//   );
//   const items = await response.json();

//   Notiflix.Notify.success(`Hooray! We found ${items.totalHits} images.`);

//   // Если пусто - сообщение

//   if (items.hits.length === 0) {
//     return Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }

//   // Генерим разметку если результат есть

//   const markup = await items.hits.map(item => {
//     return gallery.insertAdjacentHTML(
//       'afterbegin',
//       `<div class="photo-card">
//   <a href="${item.largeImageURL}"
//     ><img
//       width="300px"
//       heigh="300px"
//       src="${item.webformatURL}"
//       alt="${item.tags}"
//       loading="lazy"
//   /></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       <b>${item.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${item.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${item.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${item.downloads}</b>
//     </p>
//   </div>
// </div>`
//     );
//   });

//   const showButton = await buttonMore.classList.remove('visually-hidden');
//   return markup;
// }
// let click = 1;
// async function toGetMorePhotos() {
//   click += 1;

//   const LINK_KEY =
//     'https://pixabay.com/api/?key=33641597-af0dded98b621629426cb08e5';

//   // Идем на бэкЭнд

//   const response = await fetch(
//     `${LINK_KEY}&q=${form[0].value}&image_type=photo&orientation=horizontal&safesearch=true&page=${click}&per_page=40`
//   );

//   const items = await response.json();

//   // Если пусто - сообщение

//   if (items.hits.length === 0) {
//     buttonMore.classList.add('visually-hidden');
//     return Notiflix.Notify.info(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }

//   // Генерим разметку если результат есть

//   const markup = await items.hits.map(item => {
//     return gallery.insertAdjacentHTML(
//       'beforeend',
//       `<div class="photo-card">
//   <a href="${item.largeImageURL}"
//     ><img
//       width="315px"
//       heigh="315px"
//       src="${item.webformatURL}"
//       alt="${item.tags}"
//       loading="lazy"
//   /></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       <b class ="number">${item.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       <b class ="number">${item.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       <b class ="number">${item.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       <b class ="number">${item.downloads}</b>
//     </p>
//   </div>
// </div>`
//     );
//   });

//   autoscroll();

//   return markup;
// }

function autoscroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
