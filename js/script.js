const menu = document.querySelector('.menu-burger ul');
const burger = document.querySelector('.fa-bars');

burger.addEventListener('click', handleClick);

function handleClick() {
    menu.classList.toggle('ativo');
}