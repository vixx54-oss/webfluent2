document.addEventListener('DOMContentLoaded', function () {
  const btnMenu = document.querySelector('.btn-menu');
  const btnClose = document.querySelector('.btn-close');
  const mMenu = document.querySelector('.m-menu');

  btnMenu.addEventListener('click', function () {
    mMenu.classList.add('active');
    mMenu.style.left = '0';
  });

  btnClose.addEventListener('click', function () {
    mMenu.classList.remove('active');
    mMenu.style.left = '100%';
  });
});

