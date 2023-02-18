export const createClientsHeader = () => {
  const header = document.createElement('header'),
        logo = document.createElement('a'),
        logoImg = document.createElement('img'),
        form = document.createElement('form'),
        input = document.createElement('input'),
        container = document.createElement('div'),
        wrapper = document.createElement('div'),
        inner = document.createElement('div'),
        findList = document.createElement('ul');

  findList.classList.add('find-list', 'hide');
  header.classList.add('header');
  container.classList.add('container', 'header__container');

  logo.classList.add('logo', 'header__logo');
  logoImg.classList.add('logoImg');
  logoImg.src = 'img/logo.svg';
  logoImg.alt = 'Логотип';

  form.classList.add('header__form');
  input.classList.add('header__input');
  input.placeholder = 'Введите запрос';


  wrapper.classList.add('header__wrapper');
  inner.classList.add('header__inner');

  header.append(container);
  inner.append(input, findList);
  logo.append(logoImg);
  form.append(inner);
  container.append(logo,form);

  return header;
}
