import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  carddAttr2: '',
  carddAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: 'true',
  isSaveButtonDisabled: false,
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
