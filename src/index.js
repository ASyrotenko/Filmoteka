import './js/modal-team';
import './js/addvideo';
import './js/firebase-auth';
import './js/firebase-db-index';
import './js/firebase-class';
import './js/movie-card';
import './js/search-movie';
import './js/change-color-scheme.js';
import './js/library-auth';
import './js/backToTop';
import './js/pagination';

import { FilmsApiService } from './js/films-service';
import { filmTpl } from './js/films-gallery';
import { getRefs } from './js/get-refs';
import { combineGenres } from './js/get-genres';
import { pagination } from './js/pagination';
import { getPaginationFromMainRequest } from './js/pagination';
const refs = getRefs();

// function renderFilmGallery(films, genres) {
//   refs.filmGallery.innerHTML = '';

//   refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
//   //remove spinner
//   document.querySelector('.spinner').style.display = 'none';
// }

export const filmsApiService = new FilmsApiService();
// export async function load(page) {
//   const genres = await combineGenres();
//   const filmsTrending = await filmsApiService.fetchFilmsTrending(page);
//   renderFilmGallery(filmsTrending, genres);
// }

//запуск пагінації - pagination.js
// getPaginationFromMainRequest();
