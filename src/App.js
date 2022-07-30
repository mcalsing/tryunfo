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
  cardTrunfo: 'true',
  hasTrunfo: false,
  isSaveButtonDisabled: true,
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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
          onInputChange={ this.inputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
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
    );
  }
}

export default App;
