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

  return (
    <div className="App">
      <div class="page">
        <Header />
        <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="delete-card" title="Вы уверены?" />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" children="" />
        <PopupWithForm name="edit-pictures" title="Новое место" children="" />
        <PopupWithForm name="edit-avatar" title="Обновить аватар" />
        <ImagePopup />

        {/* <div class="popup popup_form_edit-avatar">
          <div class="popup__container popup__container_edit-avatar">
            <button type="button" class="popup__close popup__close_edit-avatar"></button>
            <form id="editAvatar" name="editAvatar" class="popup__wrapper">
              <h2 class="popup__title">Обновить аватар</h2>
              <input type="url" required class="popup__input" placeholder="Ссылка на ваш аватар" name="avatar" />
              <span class="popup__message-error popup__message-error_avatar"></span>
              <button name="saved" type="submit" class="popup__btn popup__btn_disabled">Сохранить</button>
            </form>
          </div>
        </div> */}





        {/* <div class="popup popup_form_edit-pictures">
          <div class="popup__container">
            <button type="button" class="popup__close"></button>
            <form id="newPlace" name="newPlace" class="popup__wrapper">
              <h2 class="popup__title">Новое место</h2>
              <input minlength="2" maxlength="30" class="popup__input popup__input_title" required placeholder="Название"
                name="name" type="text" />
              <span class="popup__message-error popup__message-error_name">Вы пропустили это поле.</span>
              <input required placeholder="Ссылка на картинку" name="link" type="url"
                class="popup__input popup__input_link" />
              <span class="popup__message-error popup__message-error_link">Вы пропустили это поле.</span>
              <button name="saved" type="submit" class="popup__btn popup__btn_disabled">Создать</button>
            </form>
          </div>
        </div> */}




        {/*

        <div class="popup popup_form_edit-profile">
          <div class="popup__container">
            <button type="button" class="popup__close"></button>
            <form id="editProfile" novalidate name="editProfile" class="popup__wrapper">
              <h2 class="popup__title">Редактировать профиль</h2>
              <input minlength="2" maxlength="40" required class="popup__input popup__input_name"
                placeholder="Введите ваше имя" name="title" type="text" />
              <span class="popup__message-error popup__message-error_title"></span>
              <input minlength="2" maxlength="200" required placeholder="Чем вы заниметесь" name="subtitle" type="text"
                class="popup__input popup__input_occupation" />
              <span class="popup__message-error popup__message-error_subtitle"></span>
              <button name="saved" type="submit" class="popup__btn popup__btn_disabled">Сохранить</button>
            </form>
          </div>
        </div> */}





        {/* <div class="popup popup_form_delete-card">
          <div class="popup__container popup__container_delete-card">
            <button type="button" class="popup__close popup__close_delete-card"></button>
            <h2 class="popup__title">Вы уверены?</h2>
            <button name="saved" type="submit" class="popup__btn popup__btn_delete-card">Да</button>
          </div>
        </div> */}





        <template id="user">
          <article class="element">
            <img class="element__trash" src="<%=require('./img/Trash.svg')%>" alt="кнопка для удаления картинки" />
            <img class="element__img" />
            <div class="element__wrapper">
              <h2 class="element__title"></h2>
              <div class="element__details">
                <button type="button" class="element__like"></button>
                <p class="element__counter">1</p>
              </div>
            </div>
          </article>
        </template>










      </div>


    </div>
  );
}

export default App;
