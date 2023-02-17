import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { page, toGetResponse } from './serverResponse';
import { autoscroll } from './autoscroll';

export async function createMarkup(place) {
  const form = document.querySelector('form');
  const promiseFoo = await toGetResponse(form[0].value, page);

  const markup = await promiseFoo.hits.map(item => {
    const gallery = document.querySelector('.gallery');
    return gallery.insertAdjacentHTML(
      `${place}`,
      `<div class="photo-card">
  <div class="thumb"><a href="${item.largeImageURL}"
    ><img class="img-photo"
      src="${item.webformatURL}"
      alt="${item.tags}"
      loading="lazy"
  /></a></div>
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

  if (page >= 3) {
    autoscroll();
  }

  // if (promiseFoo.hits.length === 0 && page >= 2) {
  //   return Notiflix.Notify.info(
  //     "We're sorry, but you've reached the end of search results."
  //   );
  // }
  const buttonMore = document.querySelector('.load-more');

  // **** You could unlock it for button loading (also html and createMarkup.js too) ****

  // const showButton = await buttonMore.classList.remove('visually-hidden');
  return markup;
}

const lightbox = new SimpleLightbox('.gallery a', {});
lightbox.on('show.simplelightbox', function () {});
