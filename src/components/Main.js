
import {useEffect, useState} from 'react';
import api from "../utils/Api";
import Card from './Card'

function Main(props) {


    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([
            api.getInfo('users', '/me'),
            api.getInfo('cards', ''),
        ])
            .then(([dataUser, dataCards]) => {
                setUserName(dataUser.name)
                setUserDescription(dataUser.about)
                setUserAvatar(dataUser.avatar)
                setCards(dataCards)

            })
            .catch((errorMessage) => {
                console.log(errorMessage);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
                    <div onClick={props.onEditAvatar} className="profile__pic"></div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">{userName}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button">
                            </button>
                        </div>
                        <p className="profile__occupation">{userDescription}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button">
                </button>

            </section>
            <Card card={cards} onCardClick={props.onCardClick} />
        </main>
    );
}

export default Main;