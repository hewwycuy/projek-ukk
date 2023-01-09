const nav = document.querySelector('nav');
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

tombol.addEventListener('click', function(){
    menu.classList.toggle('slide');
    nav.classList.toggle('nav-geser');
});
