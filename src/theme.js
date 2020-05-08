const inputRef = document.getElementById('theme-switch-control');
const bodyRef = document.querySelector('body');
const saveTheme = localStorage.getItem('Theme');
inputRef.addEventListener('change', handleTheme);

if (saveTheme) {
  bodyRef.className = saveTheme;
}

function handleTheme() {
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
