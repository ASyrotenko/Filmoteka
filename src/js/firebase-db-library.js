import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.watched.addEventListener('click', showWatched);
refs.queue.addEventListener('click', showQueue);

async function showWatched() {
  let watched = await firebase.getDoc('watched');
  if (watched.length === 0) {
    console.log('ERROR');
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li>
      <p>В бібліотеці не знайдено переглянутих фільмів</p>
      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="Помилка пошуку" loading="lazy"/>
    </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    console.log(watched);
  }
}

async function showQueue() {
  let queue = await firebase.getDoc('queue');

  if (queue.length === 0) {
    console.log('ERROR');
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li>
        <p>В бібліотеці не знайдено збережених для перегляду фільмів</p>
        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="Помилка пошуку" loading="lazy"/>
      </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    console.log(queue);
  }
}