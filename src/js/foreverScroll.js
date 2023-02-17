import { createMarkup } from './createMarkup';

export function foreverScroll() {
  const doc = document.documentElement.getBoundingClientRect();
  const user = document.documentElement.clientHeight;

  if (doc.bottom < user + 1) {
    setTimeout(() => {
      console.log('done');
      createMarkup('beforeend');
    }, 1000);
  }
}
