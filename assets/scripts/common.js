const btn = document.querySelector('.theme__button') /* находим кнопку <div class="theme__button">Switch theme</div> по селектору .theme__button и записываем ее в переменную btn */
const theme = document.querySelector('.theme') /* находим блок <div class="theme">, в котором будет меняться тема, по селектору .theme и записываем ее в переменную theme */

theme.setAttribute('data-theme', 'light') /* устанавливаем значение 'light' по-умолчанию */

btn.addEventListener('click', () => { /* при клике на кнопку <div class="theme__button">Switch theme</div> */
  if (theme.getAttribute('data-theme') === 'light') { /* если у блока <div class="theme"> атрибут 'data-theme' строго равен значению 'light'  */
    theme.setAttribute('data-theme', 'dark') /* тогда устанавливаем значение 'dark' */
  } else { /* а иначе */
    theme.setAttribute('data-theme', 'light') /* устанавливаем значение 'light' */
  }
})