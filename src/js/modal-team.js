const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdropTeam = document.querySelector('.team-backdrop');
const body = document.querySelector('body');

openModalBtn.addEventListener('click', openModalOpen);
closeModalBtn.addEventListener('click', closeModalClose);
backdropTeam.addEventListener('click', clickBackdropClick);

function openModalOpen() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal');
}

function closeModalClose() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscPress);
  document.body.style.overflow = 'auto';
}

function clickBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalClose();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModalClose();
  }
}