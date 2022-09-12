import { useState, useEffect } from "react";
import api from "../utils/Api";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [currentUser, setСurrentUser] = useState("");
  const [cards, setСards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo("cards", ""), api.getInfo("users", "/me")])
      .then(([dataCards, dataUser]) => {
        setСards(dataCards);
        setСurrentUser(dataUser);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data) {
    api
      .editProfile(data.name, data.about)
      .then((data) => {
        setСurrentUser(data);
        closeAllPopups();
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .editAvatar(data)
      .then((data) => {
        setСurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateCard(card) {
    api
      .createCard(card.title, card.link)
      .then((newCard) => {
        setСards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLike(card._id, !isLiked).then((newCard) => {
      setСards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setСards((state) =>
        state.filter(function (el) {
          return el._id !== card._id;
        })
      );
    });
  }

  return (
    <div className="App">
      <CardsContext.Provider value={cards}>
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
            <Header />
            <Main
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCardClick={handleCardClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
            />
            <Footer />
            <PopupWithForm
              buttonText="Да"
              onClose={closeAllPopups}
              name="delete-card"
              title="Вы уверены?"
            />

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleUpdateCard}
            />
            <EditAvatarPopup
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            />
            <EditProfilePopup
              onUpdateUser={handleUpdateUser}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            />
            <ImagePopup onClose={closeAllPopups} card={selectedCard} />
          </div>
        </CurrentUserContext.Provider>
      </CardsContext.Provider>
    </div>
  );
}

export default App;
