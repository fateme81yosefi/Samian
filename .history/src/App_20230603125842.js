import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { useDispatch } from 'react-redux'
import { setDataAction } from './Redux/Action'
import rootReducer from './Redux/'
function App() {
  const dispatch = useDispatch()
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
      </Provider>
  );
}

export default App;
