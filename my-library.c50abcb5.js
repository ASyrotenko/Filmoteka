!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a("469FY"),a("iGaYn"),a("l8AHb");var c=a("bpxeT"),r=a("2TvXO"),o=a("iGaYn"),s=a("3vKGz"),l=(c=a("bpxeT"),r=a("2TvXO"),a("8Mjv6")),d=(0,(s=a("3vKGz")).getRefs)(),u=new(0,l.FilmsApiService);function m(e){return e.map(f).join("")}function f(e){return p.apply(this,arguments)}function p(){return(p=e(c)(e(r).mark((function t(n){var i,a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.fetchMovie(n);case 2:i=e.sent,a=v(i),d.filmGallery.insertAdjacentHTML("beforeend",a);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){var t,n,i,a=e.title,c=e.name,r=e.original_name,o=e.original_title,s=e.genres,l=e.vote_average,d=e.vote_count,u=e.release_date,m=e.poster_path,f=e.id,p=null!==(i=null!==(n=null!==(t=null!=a?a:c)&&void 0!==t?t:r)&&void 0!==n?n:o)&&void 0!==i?i:"",v=s?s.slice(0,2).map((function(e){return e.name})):"";return s.length>2&&v.push("Other"),' <li   class="film__item">\n    \n        <a class="film__link"\n        href="#"\n        >\n     <img\n  id="'.concat(f,'"\n  data-imgpath=').concat(m,'\n  class="film__image"\n  ').concat(m?'\n  srcset="\n  https://image.tmdb.org/t/p/w500/'.concat(m,"      500w,\n  https://image.tmdb.org/t/p/w780/").concat(m,"      780w,\n  https://image.tmdb.org/t/p/w1280/").concat(m,"    1280w,\n  https://image.tmdb.org/t/p/w300/").concat(m,"      300w,\n    https://image.tmdb.org/t/p/original/").concat(m,' 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/').concat(m,'"\n  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"\n\n  '):'src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"\n  ','\n  alt="Movie: ').concat(p,'"\n/>\n        </a>\n      </div>\n      <div class="film__info">\n          <div class="aver-rate">\n            <p class="film__info--text"> Average rate ').concat(l.toFixed(1),' </p>\n          </div>\n          <div class="votes-amount">\n            <p class="film__info--text"> Votes ').concat(d,'</p>\n          </div>\n        </div>\n      <div class="film__content">\n        ').concat(p?'\n        <h3 class="film__film__title">\n          '.concat(p,"</h3>\n        "):""," ").concat(v?'\n        <p class="film__genres">'.concat(v.join(", "),"\n        </p>\n        "):""," \n        \n        ").concat(u?'\n        <p class="film__date">| '.concat(new Date(u).getFullYear(),"</p>\n        "):""," \n        ").concat(l?'\n        <p class="film__value">'.concat(l.toFixed(2),"</p>\n        "):"","\n   \n    </li>\n    ")}function h(e,t){d.insertImgCont.insertAdjacentHTML("beforeend",function(e){return'\n<img\n  class="movie__poster"\n  '.concat(e?'\n  srcset="\n    https://image.tmdb.org/t/p/w300/'.concat(e,"      300w,\n    https://image.tmdb.org/t/p/w500/").concat(e,"      500w,\n    https://image.tmdb.org/t/p/w780/").concat(e,"      780w,\n    https://image.tmdb.org/t/p/w1280/").concat(e,"    1280w,\n    https://image.tmdb.org/t/p/original/").concat(e,' 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/').concat(e,'"\n  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"\n\n  '):'src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"\n  ','\n  alt="Movie title"\n/>\n')}(t)),d.movieBox.insertAdjacentHTML("beforeend",function(e){var t,n=e.title,i=e.original_name,a=e.original_title,c=e.popularity,r=e.genres,o=e.vote_average,s=e.vote_count,l=e.overview,d=e.id,u=null!==(t=null!=i?i:a)&&void 0!==t?t:"",m=r?r.map((function(e){return e.name})):"";return'\n  <div class="movie__id" id="'.concat(d,'" ><h2 class="movie-card__title">\n    ').concat(null!=n?n:u,'\n    </h2>\n  <div class="movie__info-container">\n<table class="movie-info__table">\n  <tr>\n    ').concat(s?'\n            <td class="movie__info-item">Vote / Votes</td>\n        ':"","\n    ").concat(s?'\n            <td class="movie__info-data"><span class="td-box">'.concat(o.toFixed(1),"</span> / ").concat(s,"</td>\n        "):"","\n    \n  </tr>\n  <tr>\n    ").concat(c?'\n            <td class="movie__info-item">Popularity</td>\n        ':"","\n    ").concat(c?'\n            <td class="movie__info-data">'.concat(c.toFixed(1),"</td>\n        "):"","\n  </tr>\n  <tr>\n     ").concat(u?'\n                <td class="movie__info-item">Original Title</td>\n        ':"","\n    ").concat(u?'\n                <td class="movie__info-data movie__info-data--title">'.concat(u,"</td>\n        "):"","\n  </tr>\n    <tr>\n    ").concat(m?'<td class="movie__info-item">Genre</td>':"","\n    ").concat(m?'<td class="movie__info-data">'.concat(m.join(", "),"</td>"):"","\n  </tr>\n</table>\n</div>\n").concat(l?'\n    <h3 class="movie__about">About</h3> ':"","\n").concat(l?'\n    <p class="movie__about-info">'.concat(l,"</p> "):"","\n</div>")}(e)),document.querySelector(".spinner").classList.remove("hidden")}function w(e){return g.apply(this,arguments)}function g(){return(g=e(c)(e(r).mark((function t(n){var i,a,c,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.classList.contains("film__image")){e.next=3;break}return e.abrupt("return");case 3:return d.insertImgCont.innerHTML="",d.movieBox.innerHTML="",d.watchBtn.classList.remove("not-active"),e.next=8,u.fetchMovie(n.target.id);case 8:if(i=e.sent){e.next=11;break}return e.abrupt("return");case 11:return d.modalBackdrop.classList.remove("is-hidden"),d.btnUp.classList.add("btn-up_hide"),window.addEventListener("keydown",b),document.querySelector("body").classList.add("modal-open"),a=n.target.dataset.imgpath,h(i,a),document.querySelector(".spinner").classList.add("hidden"),c=document.querySelector(".movie__id"),o=c.id,e.next=22,u.fetchMovieVideo(o);case 22:y(e.sent);case 24:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _(e){d.trailerOverlay.classList.remove("not-active"),d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("keydown",b),k(),document.querySelector("body").classList.remove("modal-open"),d.insertVideoCont.innerHTML=" ",d.addToWatched.textContent="add to watched",d.addToWatched.classList.remove("film-btn--active"),d.addToQueue.textContent="add to queue",d.addToQueue.classList.remove("film-btn--active"),d.queue.classList.contains("film-btn--active")?d.queue.click():d.watched.click()}function b(e){"Escape"===e.code&&_()}d.filmGallery.addEventListener("click",w),document.querySelector(".backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&_()})),d.filmGallery.addEventListener("click",w),d.modalCloseBtn.addEventListener("click",_);function y(e){var t,n=e.find((function(e){return null!==(t="Official Trailer"===e.name)&&void 0!==t?t:{}}));if(!n)return d.watchBtn.classList.add("not-active"),void d.trailerOverlay.classList.add("not-active");d.insertVideoCont.insertAdjacentHTML("beforeend",function(e){var t=e.key,n=e.site;return'<iframe class="iframe" width="100%" height="100%" src="https://www.'.concat(n,".com/embed/").concat(t,'?origin=https://asyrotenko.github.io" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;\n    gyroscope; picture-in-picture" allowfullscreen></iframe>')}(n))}function L(){return x.apply(this,arguments)}function x(){return(x=e(c)(e(r).mark((function t(){return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.insertVideoCont.classList.add("is-active"),d.trailerBox.classList.add("is-active"),d.watchBtn.setAttribute("disabled"," "),d.closeVideoBtn.removeAttribute("disabled"),d.insertVideoCont.scrollIntoView();case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function k(){document.querySelectorAll("iframe").forEach((function(e){e.src=e.src})),document.querySelectorAll("video").forEach((function(e){e.pause()})),d.insertVideoCont.classList.remove("is-active"),d.trailerBox.classList.remove("is-active"),d.closeVideoBtn.setAttribute("disabled",""),d.watchBtn.removeAttribute("disabled")}d.trailerOverlay.addEventListener("click",L),d.closeVideoBtn.addEventListener("click",k),d.watchBtn.addEventListener("click",L);var T=(0,s.getRefs)(),q=new(0,o.Firebase);function M(){return A.apply(this,arguments)}function A(){return(A=e(c)(e(r).mark((function t(){var n;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.queue.classList.remove("film-btn--active"),T.watched.classList.add("film-btn--active"),e.next=4,q.getDoc("watched");case 4:0===(n=e.sent).length?(document.querySelector(".spinner").classList.add("hidden"),T.filmGallery.innerHTML="",T.filmGallery.insertAdjacentHTML("beforeend",'<li class="film-list-error">\n      <p class="library__text">No watched movies found in the library</p>\n      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No watched movies found in the library"/>\n    </li>')):(T.filmGallery.innerHTML="",m(n),document.querySelector(".spinner").classList.add("hidden"));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=e(c)(e(r).mark((function t(){var n;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.watched.classList.remove("film-btn--active"),T.queue.classList.add("film-btn--active"),document.querySelector(".spinner").classList.add("hidden"),e.next=5,q.getDoc("queue");case 5:0===(n=e.sent).length?(T.filmGallery.innerHTML="",document.querySelector(".footer").classList.add("footer--empty-library"),T.filmGallery.insertAdjacentHTML("beforeend",'<li class="film-list-error">\n        <p class="library__text">No movies saved for viewing were found in the library</p>\n        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No movies saved for viewing were found in the library"/>\n      </li>')):(T.filmGallery.innerHTML="",m(n));case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}T.watched.addEventListener("click",M),T.queue.addEventListener("click",(function(){return E.apply(this,arguments)}));var B=setInterval((function(e){try{T.watched.classList.add("film-btn--active"),q.userStatus(),M(),clearInterval(B)}catch(e){console.log("error")}}),250);a("3diZ0"),a("aZhHc"),a("gNnxf")}();
//# sourceMappingURL=my-library.c50abcb5.js.map
