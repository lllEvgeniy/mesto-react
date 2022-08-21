import { useState } from 'react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />

        <PopupWithForm buttonText='Да' onClose={closeAllPopups} name="delete-card" title="Вы уверены?" />

        <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit-profile" title="Редактировать профиль">
          <input minLength="2" maxLength="40" required className="popup__input popup__input_name"
            placeholder="Введите ваше имя" name="title" type="text" />
          <span className="popup__message-error popup__message-error_title"></span>
          <input minLength="2" maxLength="200" required placeholder="Чем вы заниметесь" name="subtitle" type="text"
            className="popup__input popup__input_occupation" />
          <span className="popup__message-error popup__message-error_subtitle"></span>
        </PopupWithForm>

        <PopupWithForm buttonText='Создать' onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="edit-pictures" title="Новое место">
          <input minLength="2" maxLength="30" className="popup__input popup__input_title" required placeholder="Название"
            name="name" type="text" />
          <span className="popup__message-error popup__message-error_name">Вы пропустили это поле.</span>
          <input required placeholder="Ссылка на картинку" name="link" type="url"
            className="popup__input popup__input_link" />
          <span className="popup__message-error popup__message-error_link">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="edit-avatar" title="Обновить аватар">
          <input type="url" required className="popup__input" placeholder="Ссылка на ваш аватар" name="avatar" />
          <span className="popup__message-error popup__message-error_avatar"></span>
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
