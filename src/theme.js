// import menu from './menu.json';
// import menuTemplate from '../src/templating/m';

const inputRef = document.getElementById('theme-switch-control');

const bodyRef = document.querySelector('body');

inputRef.addEventListener('change', handleTheme);

const saveTheme = localStorage.getItem('Theme');

if (saveTheme) {
  bodyRef.className = saveTheme;
}

function handleTheme(event) {

  bodyRef.classList.remove('light-theme');
  if (inputRef.checked) {
    bodyRef.classList.add('dark-theme');
  } else {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
  }

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const x = `${bodyRef.className}`;
  localStorage.setItem('Theme', x);
}
const checkedBtn = document.getElementById('theme-switch-control');
if (saveTheme === 'dark-theme') {
  checkedBtn.checked = 'true';
} 
// const menuDraft = { menu: menu };
// // console.log(menuDraft);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const refs = {
//   body: document.querySelector('body'),
//   menuList: document.querySelector('ul#menu'),
//   themeCheckbox: document.querySelector('#theme-switch-control'),
// };

// const setInitialTheme = () => {
//   if (localStorage.getItem('theme') === Theme.DARK) {
//     refs.themeCheckbox.checked = true;
//     refs.body.classList.add(Theme.DARK);
//   }
// };

// const handleThemeChange = () => {
//   if (refs.themeCheckbox.checked) {
//     refs.body.classList.remove(Theme.LIGHT);
//     refs.body.classList.add(Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// };

// setInitialTheme();
// refs.themeCheckbox.addEventListener('change', handleThemeChange);
// refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(menuDraft));
