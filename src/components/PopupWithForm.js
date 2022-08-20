
function PopupWithForm(props) {

    return (
        <div className={`popup popup_form_${props.name}`}>
            <div class="popup__container">
                <button type="button" class="popup__close"></button>
                <form id="editProfile" novalidate name={props.name} class="popup__wrapper">
                    <h2 class="popup__title">{props.title}</h2>
                    {props.children}
                    <button name="saved" type="submit" class="popup__btn">Сохранить</button>
                </form>
            </div>
        </div>

    );
}

export default PopupWithForm;