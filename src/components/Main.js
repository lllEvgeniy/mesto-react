
import { useContext } from 'react';
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    const currentUser = useContext(CurrentUserContext)
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <img src={currentUser.avatar} alt="Фото профиля" className="profile__avatar" />
                    <div onClick={props.onEditAvatar} className="profile__pic"></div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button">
                            </button>
                        </div>
                        <p className="profile__occupation">{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button">
                </button>

            </section>
            <Card onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick} />
        </main>
    );
}

export default Main;