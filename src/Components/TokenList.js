import '../App.css';
import Tokens from '../Tokens';

const TokenList = () => {
  return (
    <ul className='token-list'>
      {Tokens.map((token) => (
        <li key={token.id}>
          <ul>
            <li><strong>Name:</strong> {token.name}</li>
            <li><strong>Symbol:</strong> {token.symbol}</li>
            <li><strong>Supplied:</strong> {token.supplied}</li>
          </ul>
        </li>
      ))}
    </ul>
  )
};

export default TokenList;
