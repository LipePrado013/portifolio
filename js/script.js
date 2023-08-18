const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const menuPrin = document.querySelector('#menuPrin');
const menuLate = document.querySelector('#menuLateral');


const abrir = () => {
    // fundoPreto.classList.toggle('hide');
    menuLate.classList.toggle('hide');
}


[openMenu, closeMenu].forEach((el => {
    el.addEventListener('click', () => abrir())
}))






// const buttonOpen = document.querySelector('#btnOpen');
// const buttonclose = document.querySelector('#btnClose');
// const modal = document.querySelector('#modal');
// const fundoPreto = document.querySelector('#fundoPreto');


// const adicionarclass = () => {
//     fundoPreto.classList.toggle('aparecer');
//     modal.classList.toggle('aparecer');
// }

// [buttonOpen, buttonclose].forEach((el) => {
//     el.addEventListener("click", () => adicionarclass())
// });