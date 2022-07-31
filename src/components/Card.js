import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="preview-card">

        <div className="card-name">
          Nome da Carta:
          <span data-testid="name-card">{cardName}</span>
        </div>
        {cardTrunfo && <p className="ST" data-testid="trunfo-card">Super Trunfo</p>}
        {/* { cardTrunfo ? <p className="ST" data-testid="trunfo-card">Super Trunfo</p> : '' } */}
        <div className="div-image">
          <img
            className="card-image"
            src={ cardImage }
            alt="Nome da carta"
            data-testid="image-card"
          />
        </div>
        <p className="descript" data-testid="description-card">{cardDescription}</p>
        Raridade: ________________________
        <span className="card-rare" data-testid="rare-card">{cardRare}</span>
        <div className="atributos">
          Atributo 1: _______________________
          <span data-testid="attr1-card">{cardAttr1}</span>
          <br />
          Atributo 2: _______________________
          <span data-testid="attr2-card">{cardAttr2}</span>
          <br />
          Atributo 3: _______________________
          <span data-testid="attr3-card">{cardAttr3}</span>
        </div>

      </section>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // isSaveButtonDisabled: propTypes.bool.isRequired,
  // onSaveButtonClick: propTypes.func.isRequired,
};

export default Card;
