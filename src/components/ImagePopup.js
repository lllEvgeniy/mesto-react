function ImagePopup() {
    return (
<div class="popup popup_type_image">
          <figure class="popup__cover">
            <button type="button" class="popup__close popup__close_img"></button>
            <img class="popup__image" />
            <figcaption class="popup__signature"></figcaption>
          </figure>
        </div>
        );
    }

    export default ImagePopup;