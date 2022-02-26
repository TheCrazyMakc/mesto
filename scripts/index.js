const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupExitButton = popup.querySelector('.popup__exit-button');
const formElement = document.querySelector('.popup__form');
const popupFieldName = popup.querySelector('.popup__field_name');
const popupFieldDescription = popup.querySelector('.popup__field_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

/*const popupToggle = function() {
  popup.classList.toggle('popup_opened');
}*/

const openPopup = function() {
  popup.classList.add('popup_opened');
}

const openClose = function() {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);
popupExitButton.addEventListener('click', openClose);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  openClose();
}

formElement.addEventListener('submit', formSubmitHandler);
