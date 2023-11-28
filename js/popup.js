const openLink = document.getElementById('open-popup');
const closeLink = document.getElementById('close-popup');
const popup = document.getElementById('popup');

// Функция открытия попап
function openPopup(event) {
  event.preventDefault();
  popup?.classList.add('active');
}

// Функция закрытия попап
function closePopup(event) {
  if (event.target === popup || event.target === closeLink) {
    event.preventDefault();
    popup?.classList.remove('active');
  }
}

// Добавляем обработчик собылия на ссылки
openLink?.addEventListener('click', openPopup);
popup?.addEventListener('click', closePopup);