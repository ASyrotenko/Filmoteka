var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("bWo2c"),n("fzYh0"),n("la0xx");var a=n("fzYh0"),o=n("lpPzL"),s=n("cQLOM");o=n("lpPzL");const r=new(0,s.FilmsApiService),l=(0,o.getRefs)();function c(e){return e.map(d).join("")}async function d(e){const t=function(e){const{original_name:t,original_title:i,genres:n,vote_average:a,vote_count:o,release_date:s,poster_path:r,id:l}=e,c=t??i??"",d=n?n.map((e=>e.name)):"";return` <li   class="film__item">\n    \n        <a class="film__link"\n        href="#"\n        >\n     <img\n  id="${l}"\n  data-imgpath=${r}\n  class="film__image"\n  ${r?`\n  srcset="\n  https://image.tmdb.org/t/p/w500/${r}      500w,\n  https://image.tmdb.org/t/p/w780/${r}      780w,\n  https://image.tmdb.org/t/p/w1280/${r}    1280w,\n  https://image.tmdb.org/t/p/w300/${r}      300w,\n    https://image.tmdb.org/t/p/original/${r} 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/${r}"\n  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"\n\n  `:'src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"\n  '}\n  alt="Movie: ${c}"\n/>\n        </a>\n      </div>\n      <div class="film__info">\n          <div class="aver-rate">\n            <p class="film__info--text"> Average rate ${a.toFixed(1)} </p>\n          </div>\n          <div class="votes-amount">\n            <p class="film__info--text"> Votes ${o}</p>\n          </div>\n        </div>\n      <div class="film__content">\n        ${c?`\n        <h3 class="film__film__title">\n          ${c}</h3>\n        `:""} ${d?`\n        <p class="film__genres">${d.join(", ")}\n        </p>\n        `:""} \n        \n        ${s?`\n        <p class="film__date">| ${new Date(s).getFullYear()}</p>\n        `:""} \n        ${a?`\n        <p class="film__value">${a.toFixed(2)}</p>\n        `:""}\n   \n    </li>\n    `}(await r.fetchMovie(e));l.filmGallery.insertAdjacentHTML("beforeend",t)}l.filmGallery.addEventListener("click",m);async function m(e){if(e.preventDefault(),!e.target.classList.contains("film__image"))return;l.insertImgCont.innerHTML="",l.movieBox.innerHTML="",l.watchBtn.classList.remove("not-active");const t=await r.fetchMovie(e.target.id);if(!t)return;l.modalBackdrop.classList.remove("is-hidden"),l.btnUp.classList.add("btn-up_hide"),window.addEventListener("keydown",v),document.querySelector("body").classList.add("modal-open"),function(e,t){l.insertImgCont.insertAdjacentHTML("beforeend",function(e){return`\n<img\n  class="movie__poster"\n  ${e?`\n  srcset="\n    https://image.tmdb.org/t/p/w300/${e}      300w,\n    https://image.tmdb.org/t/p/w500/${e}      500w,\n    https://image.tmdb.org/t/p/w780/${e}      780w,\n    https://image.tmdb.org/t/p/w1280/${e}    1280w,\n    https://image.tmdb.org/t/p/original/${e} 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/${e}"\n  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"\n\n  `:'src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"\n  '}\n  alt="Movie title"\n/>\n`}(t)),l.movieBox.insertAdjacentHTML("beforeend",function(e){const{title:t,original_name:i,original_title:n,popularity:a,genres:o,vote_average:s,vote_count:r,overview:l,id:c}=e,d=i??n??"",m=o?o.map((e=>e.name)):"";return`\n  <div class="movie__id" id="${c}" ><h2 class="movie-card__title">\n    ${t??d}\n    </h2>\n  <div class="movie__info-container">\n<table class="movie-info__table">\n  <tr>\n    ${r?'\n            <td class="movie__info-item">Vote / Votes</td>\n        ':""}\n    ${r?`\n            <td class="movie__info-data"><span class="td-box">${s.toFixed(1)}</span> / ${r}</td>\n        `:""}\n    \n  </tr>\n  <tr>\n    ${a?'\n            <td class="movie__info-item">Popularity</td>\n        ':""}\n    ${a?`\n            <td class="movie__info-data">${a.toFixed(1)}</td>\n        `:""}\n  </tr>\n  <tr>\n     ${d?'\n                <td class="movie__info-item">Original Title</td>\n        ':""}\n    ${d?`\n                <td class="movie__info-data movie__info-data--title">${d}</td>\n        `:""}\n  </tr>\n    <tr>\n    ${m?'<td class="movie__info-item">Genre</td>':""}\n    ${m?`<td class="movie__info-data">${m.join(", ")}</td>`:""}\n  </tr>\n</table>\n</div>\n${l?'\n    <h3 class="movie__about">About</h3> ':""}\n${l?`\n    <p class="movie__about-info">${l}</p> `:""}\n</div>`}(e)),document.querySelector(".spinner").style.display="none"}(t,e.target.dataset.imgpath);const i=document.querySelector(".movie__id").id;!function(e){const t=e.find((e=>"Official Trailer"===e.name??{}));if(!t)return l.watchBtn.classList.add("not-active"),void l.trailerOverlay.classList.add("not-active");l.insertVideoCont.insertAdjacentHTML("beforeend",function(e){const{key:t,site:i}=e;return`<iframe class="iframe" width="100%" height="100%" src="https://www.${i}.com/embed/${t}?origin=https://asyrotenko.github.io" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;\n    gyroscope; picture-in-picture" allowfullscreen></iframe>`}(t))}(await r.fetchMovieVideo(i))}function f(e){l.trailerOverlay.classList.remove("not-active"),l.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("keydown",v),u(),document.querySelector("body").classList.remove("modal-open"),l.insertVideoCont.innerHTML=" ",l.addToWatched.textContent="add to watched",l.addToWatched.classList.remove("film-btn--active"),l.addToQueue.textContent="add to queue",l.addToQueue.classList.remove("film-btn--active"),l.queue.classList.contains("film-btn--active")?l.queue.click():l.watched.click()}function v(e){"Escape"===e.code&&f()}document.querySelector(".backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&f()})),l.filmGallery.addEventListener("click",m),l.modalCloseBtn.addEventListener("click",f);async function p(){l.insertVideoCont.classList.add("is-active"),l.trailerBox.classList.add("is-active"),l.watchBtn.setAttribute("disabled"," "),l.closeVideoBtn.removeAttribute("disabled"),l.insertVideoCont.scrollIntoView()}function u(){document.querySelectorAll("iframe").forEach((e=>{e.src=e.src})),document.querySelectorAll("video").forEach((e=>{e.pause()})),l.insertVideoCont.classList.remove("is-active"),l.trailerBox.classList.remove("is-active"),l.closeVideoBtn.setAttribute("disabled",""),l.watchBtn.removeAttribute("disabled")}l.trailerOverlay.addEventListener("click",p),l.closeVideoBtn.addEventListener("click",u),l.watchBtn.addEventListener("click",p);const _=(0,o.getRefs)(),g=new(0,a.Firebase);async function w(){_.queue.classList.remove("film-btn--active"),_.watched.classList.add("film-btn--active");let e=await g.getDoc("watched");0===e.length?(_.filmGallery.innerHTML="",_.filmGallery.insertAdjacentHTML("beforeend",'<li class="film__list-error">\n      <p class="library__text">No watched movies found in the library</p>\n      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No watched movies found in the library"/>\n    </li>')):(_.filmGallery.innerHTML="",c(e))}_.watched.addEventListener("click",w),_.queue.addEventListener("click",(async function(){_.watched.classList.remove("film-btn--active"),_.queue.classList.add("film-btn--active");let e=await g.getDoc("queue");0===e.length?(_.filmGallery.innerHTML="",document.querySelector(".footer").classList.add("footer--empty-library"),_.filmGallery.insertAdjacentHTML("beforeend",'<li class="film__list-error">\n        <p class="library__text">No movies saved for viewing were found in the library</p>\n        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No movies saved for viewing were found in the library"/>\n      </li>')):(_.filmGallery.innerHTML="",c(e))}));const h=setInterval((function(e){try{_.watched.classList.add("film-btn--active"),g.userStatus(),w(),clearInterval(h)}catch(e){console.log("error")}}),250);n("97fqm"),n("7bYU0"),n("au048");
//# sourceMappingURL=my-library.e2392087.js.map
