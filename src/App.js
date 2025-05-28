import './App.css';
import CounterAppFunction  from './CounterAppFunction';
import CounterAppClass from './CounterAppClass';
function App() {
  return (
    <div className="App">
      <CounterAppClass qtys={0} />
      <CounterAppFunction  qtys={0} />
    </div>
  );
}

export default App;
