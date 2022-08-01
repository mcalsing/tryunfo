import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { onInputChange } = this.props;

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
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">

        <div className="container">
          <label htmlFor="cardName">
            Nome:
            <input
              className="input-name"
              type="text"
              name="cardName"
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
              rows="4"
              cols="31"
              className="input-description"
              name="cardDescription"
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
                name="cardAttr1"
                min="0"
                max="90"
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
                name="cardAttr2"
                min="0"
                max="90"
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
                name="cardAttr3"
                min="0"
                max="90"
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
              className="input-image"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>

        <div className="raridade-input">
          { hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="cardTrunfo ">
              Super Trunfo:
              <input
                name="cardTrunfo"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
            </label>
          )}
          <label htmlFor="cardRare">
            Raridade:
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <button
            name="isSaveButtonDisabled"
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
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
