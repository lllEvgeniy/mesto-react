import React from 'react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";




function App() {
  function handleEditProfileClick() {
    const popuFormEditProfile = document.querySelector('.popup_form_edit-profile')
    popuFormEditProfile.classList.add('popup_active')
  }

  function handleAddPlaceClick() {
    const popupFormEditPictures = document.querySelector('.popup_form_edit-pictures')
    popupFormEditPictures.classList.add('popup_active')
  }

  function handleEditAvatarClick() {
    const popupFormEditAvatar = document.querySelector('.popup_form_edit-avatar')
    popupFormEditAvatar.classList.add('popup_active')
  }
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="delete-card" title="Вы уверены?" />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" children="" />
        <PopupWithForm name="edit-pictures" title="Новое место" children="" />
        <PopupWithForm name="edit-avatar" title="Обновить аватар" />
        <ImagePopup card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
