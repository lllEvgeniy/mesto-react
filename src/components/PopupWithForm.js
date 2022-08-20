
function PopupWithForm(props) {

    return (
        <div className={`popup popup_form_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <form id="editProfile" novalidate name={props.name} className="popup__wrapper">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button name="saved" type="submit" className="popup__btn">Сохранить</button>
                </form>
            </div>
        </div>

    );
}

export default PopupWithForm;