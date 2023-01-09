const nav = document.querySelector('nav');
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');
const gambar = document.querySelector('.container')

tombol.addEventListener('click', function(){
    menu.classList.toggle('slide');
    nav.classList.toggle('nav-geser');
    gambar.classList.toggle('gambar-geser');
});
