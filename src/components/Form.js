import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = InitialState;
  }

  /* const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, 
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, 
      onSaveButtonClick
  } = this.props; */

  handleClick = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="name-input"
              onChange={onInputChange}
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label>
            Descricao
          </label>
          <textarea
            name="description-input"
            onChange={onInputChange}
            data-testid="description-input"
          >
            blalbl
          </textarea>
        </div>
        <div>
          <div>
            <label>
              Atributo 1:
              <input
                type="number"
                name="attr1-input"
                onChange={onInputChange}
                data-testid="attr1-input"
              />
            </label>
          </div>
          <div>
            <label>
              Atributo 2:
              <input
                type="number"
                name="attr2-input"
                onChange={onInputChange}
                data-testid="attr2-input"
              />
            </label>
          </div>
          <div>
            <label>
              Atributo 3:
              <input
                type="number"
                name="attr3-input"
                onChange={onInputChange}
                data-testid="attr3-input"
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Imagem carta:
            <input
              type="text"
              name="image-input"
              onChange={onInputChange}
              data-testid="image-input"
            />
          </label>
        </div>
        <label>
          Raridade:
          <select name="rare-input" onChange={onInputChange} data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          Estão indo:
          <input
            type="checkbox"
            name="trunfo-input"
            onChange={onInputChange}
            data-testid="trunfo-input"
          />
        </label>
        <div>
          <button
            name="save-button"
            onChange={onSaveButtonClick}
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    )
  }
}

export default Form;