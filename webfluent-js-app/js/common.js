document.querySelector('.btn-menu').addEventListener('click', function() {
    document.querySelector('.m-menu').classList.add('active');
});

document.querySelector('.btn-close').addEventListener('click', function() {
    document.querySelector('.m-menu').classList.remove('active');
});