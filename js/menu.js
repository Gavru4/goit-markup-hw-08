(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__close'),
    closeMenuBtn: document.querySelector('.menu-btn'),
    modal: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
