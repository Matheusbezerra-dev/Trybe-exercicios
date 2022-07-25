import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.hadleChange = this.hadleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraCaveFavorita: '',
    };
  }

  hadleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Estado e React</h1>

        <form className='form'>

          <label>
            Qual seu estado favorito?
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.hadleChange}
            />
          </label>

          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.hadleChange}
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.hadleChange}
            />
          </label>

          <label >
            Idade:
            <input
              name="idade"
              type="number"
              value={this.state.idade}
              onChange={this.hadleChange}
            />
          </label>

          <label>
            Vai comparecer à conferência?
            <input
              name="vaiComparecer"
              type="checkbox"
              value={this.state.vaiComparecer}
              onChange={this.hadleChange}
            />
          </label>

          <label>
            Escolha sua palavra chave:
            <select
              name="palavraCaveFavorita"
              value={this.state.palavraCaveFavorita}
              onChange={this.hadleChange}
            >
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

export default Forms;
