import itemsTemplate from './templating/menu-items.hbs';
import menu from './menu.json';

const menuTemplate = itemsTemplate(menu);
console.log(menuTemplate);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', menuTemplate);