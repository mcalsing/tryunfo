import React from 'react';
import propTypes from 'prop-types';

/* const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: '',
  hasTrunfo: '',
}; */

class Form extends React.Component {
/*  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  } */

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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <div>
          <label htmlFor="cardName">
            Nome:
            <input
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardDescription">
            Descricao:
            <textarea
              name="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>

        <div>
          <div>
            <label htmlFor="cardAttr1">
              Atributo 1:
              <input
                type="number"
                name="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
                data-testid="attr1-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardAttr2">
              Atributo 2:
              <input
                type="number"
                name="attr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
                data-testid="attr2-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardAttr3 ">
              Atributo 3:
              <input
                type="number"
                name="attr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
                data-testid="attr3-input"
              />
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="cardImage">
            Imagem carta:
            <input
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>

        <label htmlFor="cardRare">
          Raridade:
          <select
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo ">
          Super Trunfo:
          <input
            type="checkbox"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>

        <div>
          <button
            name="btnSave"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
