import React, {useState} from 'react'
import api from './services/api'

const Formulario = () => {
    const [nome, setNome] = useState();
    const [opcao, setOpcao] = useState('');
    const [acompanhamento, setacompanhamento] = useState('');

    function handleRegister(e) {
      e.preventDefault();

      const data = {
        nome,
        opcao,
        acompanhamento
      };

      api.post('request', data);

      if(!nome) {
        alert('Seu nome é obrigatório')
      }
      else {
        alert('Pedido realizado.')
      }

    }

return (
    <form className="form-information" onSubmit={handleRegister}>
            <div className="name">
              <label htmlFor="nome"> Nome: </label>
              <input 
                type="text" 
                nome="nome" 
                value={nome} 
                onChange={e => setNome(e.target.value)} />
            </div>

            <div className="select-options">
              <label htmlFor="">Opções: </label>
              <select 
                  value={opcao} 
                  onChange={e => setOpcao(e.target.value)} 
                  id="coffe"
                  >
                <option disabled value="">Selecione uma opção</option>
                <option value="Frappé Coffe"> Frappé Coffe </option>
                <option value="Cappuccino Coffe"> Cappuccino Coffe </option>
                <option value="Express Coffe"> Express Coffe </option>
                <option value="Mocha Coffe"> Mocha Coffe </option>
                <option value="Caffè Latte"> Caffè Latte </option>
                <option value="American Coffe"> American Coffe </option>
                <option value="Latte Macchiato"> Latte Macchiato </option>
              </select>
            </div>
            
            <div className="side-dish">
              <label htmlFor="coffe"> Acompanhamento: </label>
              <select value={acompanhamento} onChange={e => setacompanhamento(e.target.value)} id="acompanhamento">
                  <option disabled value=""> Selecione uma opção </option>
                  <option value="Biscoito de Polvilho"> Biscoito de Polvilho </option>
                  <option value="Croissant"> Croissant </option>
                  <option value="Pão de Queijo"> Pão de Queijo </option>
                  <option value="Biscoito Salgado"> Biscoito Salgado </option>
                  <option value="Pão-Doce"> Pão-Doce </option>
                  <option value="Torrada"> Torrada </option>       
              </select>       
            </div>
            <button type="submit"> Pedir </button>

          </form>
)
}

export default Formulario ;