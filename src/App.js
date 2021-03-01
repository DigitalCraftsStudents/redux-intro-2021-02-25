import './App.css';
// import Banking from './components/Banking';
import Banking from './containers/BankingContainer';
import Transactions from './containers/TransactionsContainer';
// import Investment from './components/Investment';
import Investment from './containers/InvestmentContainer';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Bank of Milla</h1>      
      <Banking />
      <Investment />
      <Transactions />
    </div>
  );
}

export default App;
