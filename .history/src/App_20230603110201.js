import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
const store = createStore(reducer)

function App() {

  return (
    <Provider>
      <div className="App">
        <Home></Home>
      </div>
      </Provider>
  );
}

export default App;
