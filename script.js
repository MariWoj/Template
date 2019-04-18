const burger = document.querySelector(".burger");
const column = document.querySelector("aside");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    column.classList.toggle("active");
})

const bell = document.querySelector('.bell');
const bellSpan = document.querySelector('.fa-bell');

bell.addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('body').classList.add('blur');
    bell.classList.add('active');
    bellSpan.classList.add('active');
})

document.querySelector('span.hide').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('body').classList.remove('blur');
    bell.classList.remove('active');
    bellSpan.classList.remove('active');
})