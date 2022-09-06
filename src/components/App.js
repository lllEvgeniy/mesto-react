import { useState, useEffect } from 'react';
import api from "../utils/Api";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";


function App() {

  const [currentUser, setСurrentUser] = useState('');
  const [cards, setСards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getInfo('cards', ''),
      api.getInfo('users', '/me'),

    ])
      .then(([dataCards, dataUser]) => {
        setСards(dataCards);
        setСurrentUser(dataUser);

      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }, []);


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

  function handleUpdateUser(data) {
    api.editProfile(data.name, data.about)
      .then((data) => {
        setСurrentUser(data);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})
  }



  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.addLike(card._id, !isLiked)
      .then((newCard) => {
        setСards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }



  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setСards((state) => state.filter(function (el) {
          return el._id !== card._id
        }))
      });
  }



  return (


    <div className="App">
      <CardsContext.Provider value={cards}>
        <CurrentUserContext.Provider value={currentUser}>

          <div className="page">
            <Header />
            <Main onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
            <Footer />
            <PopupWithForm buttonText='Да' onClose={closeAllPopups} name="delete-card" title="Вы уверены?" />
            <PopupWithForm buttonText='Создать' onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="edit-pictures" title="Новое место">
              <input minLength="2" maxLength="30" className="popup__input popup__input_title" required placeholder="Название"
                name="name" type="text" />
              <span className="popup__message-error popup__message-error_name">Вы пропустили это поле.</span>
              <input required placeholder="Ссылка на картинку" name="link" type="url"
                className="popup__input popup__input_link" />
              <span className="popup__message-error popup__message-error_link">Вы пропустили это поле.</span>
            </PopupWithForm>



            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <ImagePopup onClose={closeAllPopups} card={selectedCard} />
          </div>

        </CurrentUserContext.Provider >
      </CardsContext.Provider >
    </div >

  );
}

export default App;
