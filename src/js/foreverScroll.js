import Notiflix from 'notiflix';
import { createMarkup } from './createMarkup';

export function foreverScroll() {
  const doc = document.documentElement.getBoundingClientRect();
  const user = document.documentElement.clientHeight;

  if (doc.bottom < user + 1) {
    setTimeout(() => {
      createMarkup('beforeend').then(array => {
        if (array.length === 0) {
          return Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
      });
    }, 1000);
  }
}
