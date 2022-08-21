import React from 'react';

function PopupWithForm(props) {

    return (
        <div className={`popup popup_form_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__close"></button>

                <form id="editProfile" novalidate name={props.name} className="popup__wrapper">
                    <h2 className="popup__title">{props.title}</h2>
                    {React.Children.map(props.children, (child, i) => {
                        return child
                    })}
                    <button name="saved" type="submit" className="popup__btn">Сохранить</button>
                </form>
            </div>
        </div>

    );
}

export default PopupWithForm;