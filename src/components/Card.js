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
      <main>

        <div>
          <p data-testid="name-card">{cardName}</p>
        </div>
        <div>
          <span data-testid="rare-card">{cardRare}</span>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <span data-testid="description-card">{cardDescription}</span>
        </div>
        <div>
          <span data-testid="attr1-card">{cardAttr1}</span>
          <span data-testid="attr2-card">{cardAttr2}</span>
          <span data-testid="attr3-card">{cardAttr3}</span>
        </div>

      </main>
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
};

export default Card;
