

function Main(props) {
    return (
        <main class="content">
            <section class="profile">
                <div class="profile__wrapper">
                    <img src="<%=require('./img/images.jpg')%>" alt="Фото профиля" class="profile__avatar" />
                    <div onClick={props.onEditAvatar} class="profile__pic"></div>
                    <div class="profile__info">
                        <div class="profile__title">
                            <h1 class="profile__name"></h1>
                            <button onClick={props.onEditProfile} type="button" class="profile__edit-button">
                            </button>
                        </div>
                        <p class="profile__occupation"></p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" class="profile__add-button">
                </button>

            </section>
            <section class="elements">
            </section>
        </main>
    );
}

export default Main;