import elementTrash from '../img/Trash.svg';

function Card(props) {

    return (
        <section className="elements">
            {props.card.map((card) => (
                <article key={card._id} className="element">
                    <img className="element__trash" src={elementTrash} alt="кнопка для удаления картинки" />
                    <img onClick={function handleClick() {
                        props.onCardClick(card);
                    }
                    } className="element__img" src={card.link} alt={card.name} />
                    <div className="element__wrapper">
                        <h2 className="element__title">{card.name}</h2>
                        <div className="element__details">
                            <button type="button" className="element__like"></button>
                            <p className="element__counter">{card.likes.length}</p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Card;