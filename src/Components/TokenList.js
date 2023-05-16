import { useEffect, useState } from 'react';
import '../App.css';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      const res = await fetch(`/token`);
      const data = await res.json();
      setTokens(data);
    }
    fetchTokens();
  }, []);

  return (
    <ul className='token-list'>
      {tokens?.map((token) => (
        <li key={token.id}>
          <ul>
            <li><strong>Name:</strong> {token.name}</li>
            <li><strong>Symbol:</strong> {token.symbol}</li>
            <li><strong>Supplied:</strong> {token.supply}</li>
            <li><strong>Decimals:</strong> {token.decimals}</li>
            <li><strong>Address:</strong> {token.address}</li>
            <li><strong>Deployer:</strong> {token.deployer}</li>
          </ul>
        </li>
      ))}
    </ul>
  )
};

export default TokenList;
