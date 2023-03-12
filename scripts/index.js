//Блок управления popup:
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__event_close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupFormElement = document.querySelector('.popup__form');
const inputName = popupElement.querySelector('#popup__text-name');
const inputProf = popupElement.querySelector('#popup__text-prof');
const profileTitleElement = document.querySelector('.profile__name');
const profileTextElement = document.querySelector('.profile__prof');

//Функция переключения отображения popup
const toggleVisibilityPopup = function () {
  popupElement.classList.toggle('popup_state_is-opened');
};
//Функция передает новые значения из input popup в секцию profile
const savePopup = function (evt) {
  evt.preventDefault();
  profileTitleElement.textContent = inputName.value;
  profileTextElement.textContent = inputProf.value;
  toggleVisibilityPopup();
};
//Добавляем событие-клик к функции переключения отображения popup
popupOpenButtonElement.addEventListener('click', toggleVisibilityPopup);
popupCloseButtonElement.addEventListener('click', toggleVisibilityPopup);
popupFormElement.addEventListener('submit', savePopup);
//Завершен блок управления popup!

//Блок управления лайками:
