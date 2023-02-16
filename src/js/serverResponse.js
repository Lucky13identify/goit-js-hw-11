import axios from 'axios';
import Notiflix from 'notiflix';

export async function toGetResponse(name, click) {
  try {
    const LINK_KEY =
      'https://pixabay.com/api/?key=33641597-af0dded98b621629426cb08e5';

    const response = await axios.get(
      `${LINK_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${click}&per_page=40`
    );

    if (response.data.hits.length === 0 && page === 1) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else if (response.data.hits.length >= 0) {
      Notiflix.Notify.success(
        `Hooray! We found ${response.data.totalHits} images.`
      );
    }

    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
