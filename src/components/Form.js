import React from 'react';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: '',
  hasTrunfo: '',
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  /* const {
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
    onInputChange,
    onSaveButtonClick,
  } = this.props; */

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Nome:
            <input
              type="text"
              name="name-input"
              value={ cardName }
              onChange={ this.onInputChange }
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-input">
            Descricao:
            <textarea
              name="description-input"
              value={ cardDescription }
              onChange={ this.onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="attr1-input">
              Atributo 1:
              <input
                type="number"
                name="attr1-input"
                value={ cardAttr1 }
                onChange={ this.onInputChange }
                data-testid="attr1-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr2-input">
              Atributo 2:
              <input
                type="number"
                name="attr2-input"
                value={ cardAttr2 }
                onChange={ this.onInputChange }
                data-testid="attr2-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr3-input">
              Atributo 3:
              <input
                type="number"
                name="attr3-input"
                value={ cardAttr3 }
                onChange={ this.onInputChange }
                data-testid="attr3-input"
              />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="image-input">
            Imagem carta:
            <input
              type="text"
              name="image-input"
              value={ cardImage }
              onChange={ this.onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="rare-input"
            value={ cardRare }
            onChange={ this.onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Estão indo:
          <input
            type="checkbox"
            name="trunfo-input"
            value={ cardTrunfo }
            onChange={ this.onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <div>
          <button
            name="save-button"
            type="button"
            value={ cardTrunfo }
            onChange={ this.onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
