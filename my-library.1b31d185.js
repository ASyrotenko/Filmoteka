!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a),a("469FY"),a("iGaYn");var r=a("bpxeT"),o=a("2TvXO"),c=a("iGaYn"),s=a("3vKGz"),l=(r=a("bpxeT"),o=a("2TvXO"),a("8Mjv6")),d=(s=a("3vKGz"),new(0,l.FilmsApiService)),u=(0,s.getRefs)(),f="https://image.tmdb.org/t/p/original";function v(e){return e.map(m).join("")}function m(e){return p.apply(this,arguments)}function p(){return(p=e(r)(e(o).mark((function n(t){var i,a,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.fetchMovie(t);case 2:i=e.sent,a=_(i),r=h(i,a),u.filmGallery.insertAdjacentHTML("beforeend",r);case 6:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function _(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.poster_path,i=n.backdrop_path,a=null!==(e=null!=t?t:i)&&void 0!==e?e:"",r="".concat(f).concat(a);return r}function h(e,n){var t,i=e.original_name,a=e.original_title,r=e.genres,o=e.vote_average,c=e.release_date,s=e.id,l=null!==(t=null!=i?i:a)&&void 0!==t?t:"",d=r?r.map((function(e){return e.name})):"";return' <li   class="film__item">\n    \n        <a class="film__link"\n        href="#"\n        >\n          <img id=\''.concat(s,'\'\n            class="film__image"\n            ').concat(n?'\n        src="'.concat(n,'"\n        '):"src = ''",'\n                        alt="Movie: ').concat(l,'"\n            loading="lazy"\n          />\n        </a>\n      </div>\n      <div class="film__info">\n      <p class="film__info--text">Watch ').concat(l,' online</p>\n      </div>\n      <div class="film__content">\n        ').concat(l?'\n        <h3 class="film__film__title">\n          '.concat(l,"</h3>\n        "):""," ").concat(d?'\n        <p class="film__genres">'.concat(d.join(", "),"\n        </p>\n        "):""," \n        \n        ").concat(c?'\n        <p class="film__date">| '.concat(new Date(c).getFullYear(),"</p>\n        "):""," \n        ").concat(o?'\n        <p class="film__value">'.concat(o.toFixed(2),"</p>\n        "):"","\n   \n    </li>\n    ")}function g(e){u.insertImgCont.insertAdjacentHTML("beforeend",function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.original_title,i=n.poster_path,a=n.backdrop_path,r=null!==(e=null!=i?i:a)&&void 0!==e?e:"";return'\n             <img\n            class="movie__poster"\n            '.concat(r?'\n        src="'.concat(f).concat(r,'"\n        '):"src = ''",'\n                        alt="Movie: ').concat(null!=t?t:"",'"\n          />\n')}(e)),u.movieBox.insertAdjacentHTML("beforeend",function(e){var n,t=e.title,i=e.original_name,a=e.original_title,r=e.popularity,o=e.genres,c=e.vote_average,s=e.vote_count,l=e.overview,d=e.id,u=(e.video,null!==(n=null!=i?i:a)&&void 0!==n?n:""),f=o?o.map((function(e){return e.name})):"";return'\n  <div class="img-box"></div>\n  <div class="movie__id" id="'.concat(d,'" ><h2 class="movie-card__title">\n    ').concat(null!=t?t:u,'\n    </h2>\n  <div class="movie__info-container">\n<table class="movie-info__table">\n  <tr>\n    ').concat(s?'\n            <td class="movie__info-item">Vote / Votes</td>\n        ':"","\n    ").concat(s?'\n            <td class="movie__info-data"><span class="td-box">'.concat(c.toFixed(1),"</span> / ").concat(s,"</td>\n        "):"","\n    \n  </tr>\n  <tr>\n    ").concat(r?'\n            <td class="movie__info-item">Popularity</td>\n        ':"","\n    ").concat(r?'\n            <td class="movie__info-data">'.concat(r.toFixed(1),"</td>\n        "):"","\n  </tr>\n  <tr>\n     ").concat(u?'\n                <td class="movie__info-item">Original Title</td>\n        ':"","\n    ").concat(u?'\n                <td class="movie__info-data movie__info-data--title">'.concat(u,"</td>\n        "):"","\n  </tr>\n    <tr>\n    ").concat(f?'<td class="movie__info-item">Genre</td>':"","\n    ").concat(f?'<td class="movie__info-data">'.concat(f.join(", "),"</td>"):"","\n  </tr>\n</table>\n</div>\n").concat(l?'\n    <h3 class="movie__about">About</h3> ':"","\n").concat(l?'\n    <p class="movie__about-info">'.concat(l,"</p> "):"","\n</div>")}(e))}function b(e){return w.apply(this,arguments)}function w(){return(w=e(r)(e(o).mark((function n(t){var i,a,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.target.classList.contains("film__image")){e.next=3;break}return e.abrupt("return");case 3:return u.insertImgCont.innerHTML="",u.movieBox.innerHTML="",u.watchBtn.classList.remove("not-active"),e.next=8,d.fetchMovie(t.target.id);case 8:if(i=e.sent){e.next=11;break}return e.abrupt("return");case 11:return u.modalBackdrop.classList.remove("is-hidden"),window.addEventListener("keydown",L),document.querySelector("body").classList.add("modal-open"),g(i),a=document.querySelector(".movie__id"),r=a.id,e.next=19,d.fetchMovieVideo(r);case 19:x(e.sent);case 21:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function y(e){u.trailerOverlay.classList.remove("not-active"),u.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("keydown",L),M(),document.querySelector("body").classList.remove("modal-open"),u.insertVideoCont.innerHTML=" ",u.addToWatched.textContent="add to watched",u.addToWatched.classList.remove("film-btn--active"),u.addToQueue.textContent="add to queue",u.addToQueue.classList.remove("film-btn--active")}function L(e){"Escape"===e.code&&y()}u.filmGallery.addEventListener("click",b),document.querySelector(".backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&y()})),u.filmGallery.addEventListener("click",b),u.modalCloseBtn.addEventListener("click",y);function x(e){var n,t=e.find((function(e){return null!==(n="Official Trailer"===e.name)&&void 0!==n?n:{}}));if(!t)return u.watchBtn.classList.add("not-active"),void u.trailerOverlay.classList.add("not-active");u.insertVideoCont.insertAdjacentHTML("beforeend",function(e){var n=e.key,t=e.site;return'<iframe class="iframe" width="100%" height="100%" src="https://www.'.concat(t,".com/embed/").concat(n,'?origin=https://asyrotenko.github.io" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;\n    gyroscope; picture-in-picture" allowfullscreen></iframe>')}(t))}function T(){return k.apply(this,arguments)}function k(){return(k=e(r)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.insertVideoCont.classList.add("is-active"),u.trailerBox.classList.add("is-active"),u.watchBtn.setAttribute("disabled"," "),u.closeVideoBtn.removeAttribute("disabled"),u.insertVideoCont.scrollIntoView();case 5:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function M(){document.querySelectorAll("iframe").forEach((function(e){e.src=e.src})),document.querySelectorAll("video").forEach((function(e){e.pause()})),u.insertVideoCont.classList.remove("is-active"),u.trailerBox.classList.remove("is-active"),u.closeVideoBtn.setAttribute("disabled",""),u.watchBtn.removeAttribute("disabled")}u.trailerOverlay.addEventListener("click",T),u.closeVideoBtn.addEventListener("click",M),u.watchBtn.addEventListener("click",T);var E=(0,s.getRefs)(),B=new(0,c.Firebase);function G(){return A.apply(this,arguments)}function A(){return(A=e(r)(e(o).mark((function n(){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getDoc("watched");case 2:0===(t=e.sent).length?(console.log("ERROR"),E.filmGallery.innerHTML="",E.filmGallery.insertAdjacentHTML("beforeend",'<li class="film__list-error">\n      <p class="library__text">No watched movies found in the library</p>\n      <img src="../images/smile-icon.webp" alt="No watched movies found in the library"/>\n    </li>')):(E.filmGallery.innerHTML="",v(t));case 4:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function H(){return(H=e(r)(e(o).mark((function n(){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.watched.classList.remove("film-btn--active"),e.next=3,B.getDoc("queue");case 3:0===(t=e.sent).length?(console.log("ERROR"),E.filmGallery.innerHTML="",E.filmGallery.insertAdjacentHTML("beforeend",'<li class="film__list-error">\n        <p class="library__text">No movies saved for viewing were found in the library</p>\n        <img src="../images/smile-icon.webp" alt="No movies saved for viewing were found in the library"/>\n      </li>')):(E.filmGallery.innerHTML="",v(t));case 5:case"end":return e.stop()}}),n)})))).apply(this,arguments)}E.watched.addEventListener("click",G),E.queue.addEventListener("click",(function(){return H.apply(this,arguments)}));var O=setInterval((function(e){try{E.watched.classList.add("film-btn--active"),B.userStatus(),console.log("got id"),G(),clearInterval(O)}catch(e){console.log("error")}}),250);a("3diZ0"),a("aZhHc");(0,(s=a("3vKGz")).getRefs)()}();
//# sourceMappingURL=my-library.1b31d185.js.map
