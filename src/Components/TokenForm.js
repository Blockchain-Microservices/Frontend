import { useState } from 'react';
import '../App.css';

const TokenForm = () => {
  const [token, setToken] = useState({
    name: '',
    symbol: '',
    decimals: '',
    supply: '',
  });

  const submitHandle = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      symbol: e.target.symbol.value,
      decimals: Number(e.target.decimals.value),
      supply: Number(e.target.supply.value),
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${process.env.REACT_APP_TOKEN_FACTORY_URL}/factory`, requestOptions)
      .then(response => response.json())
      .then(data => console.log('token hash', data));
    clearForm();
  };

  const clearForm = () => {
    setToken({
      name: '',
      symbol: '',
      decimals: '',
      supply: '',
    });
  };

  const changeHandler = (e) => {
    setToken({ ...token, [e.target.name]: e.target.value })
  }

  const getIsFormValid = () => {
    return token.name &&
      token.symbol &&
      token.decimals &&
      token.supply;
  }

  return (
    <form onSubmit={submitHandle} className='token-form'>
      <fieldset>
        <div>
          <label htmlFor="tokenName">Token Name:</label>
          <input id="tokenName" value={token.name} name="name" type="text" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="tokenSymbol">Token Symbol:</label>
          <input id="tokenSymbol" name="symbol" value={token.symbol} type="text" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="decimals">Decimals:</label>
          <input id="decimals" name="decimals" value={token.decimals} type="number" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="supply">Supply:</label>
          <input id="supply" name="supply" value={token.supply} type="number" onChange={changeHandler} />
        </div>
        <div>
          <button type="submit" disabled={!getIsFormValid()}>Deploy token</button>
        </div>
      </fieldset>
    </form>
  )
}

export default TokenForm;
