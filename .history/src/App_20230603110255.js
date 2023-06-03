import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import 
function App() {

  return (
    <Provider store={}>
      <div className="App">
        <Home></Home>
      </div>
      </Provider>
  );
}

export default App;
