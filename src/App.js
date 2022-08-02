import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  deck: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  inputChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({

      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardImage, cardRare } = this.state;
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

      const maxAtributes = 210;
      const maxEachAtributes = 90;

      const inputLenght = cardName.length !== 0 && cardDescription.length !== 0
        && cardImage.length !== 0 && cardRare.length !== 0;

      const sumAtributes = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

      const validAtributes = (cardAttr1 >= 0 && cardAttr1 <= maxEachAtributes)
        && (cardAttr2 >= 0 && cardAttr2 <= maxEachAtributes)
        && (cardAttr3 >= 0 && cardAttr3 <= maxEachAtributes);

      if (inputLenght && (sumAtributes <= maxAtributes) && validAtributes) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  saveButtonClick = (event) => {
    const { cardTrunfo, cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, deck } = this.state;
    const isTrunfo = cardTrunfo;
    event.preventDefault();
    const oneCard = {
      cardTrunfo,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      hasTrunfo: isTrunfo,
      deck: [...deck, oneCard],
    });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    const showCards = deck.map((card) => (
      <Card
        key={ card.name }
        cardName={ card.cardName }
        cardDescription={ card.cardDescription }
        cardImage={ card.cardImage }
        cardAttr1={ card.cardAttr1 }
        cardAttr2={ card.cardAttr2 }
        cardAttr3={ card.cardAttr3 }
        cardRare={ card.cardRare }
        cardTrunfo={ card.cardTrunfo }
      />
    ));

    return (
      <main>
        <section className="card-buider">
          <div>
            <h2>Card Builder</h2>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.inputChange }
              onSaveButtonClick={ this.saveButtonClick }
            />
          </div>
          <div>
            <h2>Preview</h2>
            <Card
              onInputChange={ this.inputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr2={ cardAttr2 }
              cardAttr1={ cardAttr1 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <div className="deck-list">
          { showCards.length > 0 ? showCards : '' }
        </div>
      </main>
    );
  }
}

export default App;
