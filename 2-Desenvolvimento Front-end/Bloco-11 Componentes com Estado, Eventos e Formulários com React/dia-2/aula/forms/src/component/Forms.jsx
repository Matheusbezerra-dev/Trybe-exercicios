import React, { Component } from 'react';

class Form extends Component {
  // constructor() {
  //   super()

  // }
  render() {
    return (
      <div>
        <h1>Estado e React</h1>
        <form className='form'>
          <label>
            Qual seu estado favorito?
            <textarea name="estadoFavorito"></textarea>
          </label>
          <label>
            Email:
            <input name="email" type="email" />
          </label>
          <label>
            Nome
            <input name="name" type="text" />
          </label>
          <label >
            Idade:
            <input name="idade" type="number" />
          </label>
          <label>
            Vai comparecer à conferência?
            <input name="vaiComparecer" type="checkbox" />
          </label>
          <label>
            Escolha sua palavra chave:
            <select name="palavraCaveFavorita">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
              <option value="hoof's">Hoof's</option>
              <option value="react">React</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
