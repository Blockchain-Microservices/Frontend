import '../App.css';
import TokenForm from './TokenForm';
import TokenList from './TokenList';

const MainPage = () => {
  return (
    <main className="main">
      <div>
        <TokenForm />
      </div>
      <div>
        <h2 style={{textAlign: "center"}}>Deployed tokens</h2>
        <TokenList />
      </div>
    </main>
  )
}

export default MainPage;
