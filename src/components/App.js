import React from 'react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const markupEditProfile = () => {
    return (
      <>
        <input minLength="2" maxLength="40" required className="popup__input popup__input_name"
          placeholder="Введите ваше имя" name="title" type="text" />
        <span className="popup__message-error popup__message-error_title"></span>
        <input minLength="2" maxLength="200" required placeholder="Чем вы заниметесь" name="subtitle" type="text"
          className="popup__input popup__input_occupation" />
        <span className="popup__message-error popup__message-error_subtitle"></span>
      </>
    )
  }

  const markupEditPictures = () => {
    return (
      <>
        <input minLength="2" maxLength="30" className="popup__input popup__input_title" required placeholder="Название"
          name="name" type="text" />
        <span className="popup__message-error popup__message-error_name">Вы пропустили это поле.</span>
        <input required placeholder="Ссылка на картинку" name="link" type="url"
          className="popup__input popup__input_link" />
        <span className="popup__message-error popup__message-error_link">Вы пропустили это поле.</span>
      </>
    )
  }

  const markupEditAvatar = () => {
    return (
      <>
        <input type="url" required className="popup__input" placeholder="Ссылка на ваш аватар" name="avatar" />
        <span className="popup__message-error popup__message-error_avatar"></span>
      </>
    )
  }

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
  setSelectedCard(false)
}

  const [selectedCard, setSelectedCard] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm onClose={closeAllPopups} name="delete-card" title="Вы уверены?" />
        <PopupWithForm onClose={closeAllPopups}  isOpen={isEditProfilePopupOpen} name="edit-profile" title="Редактировать профиль" children={markupEditProfile()} />
        <PopupWithForm onClose={closeAllPopups}  isOpen={isAddPlacePopupOpen} name="edit-pictures" title="Новое место" children={markupEditPictures()} />
        <PopupWithForm onClose={closeAllPopups}  isOpen={isEditAvatarPopupOpen} name="edit-avatar" title="Обновить аватар" children={markupEditAvatar()} />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
