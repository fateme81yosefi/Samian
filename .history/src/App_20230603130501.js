import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { useDispatch } from 'react-redux'
import { setDataAction } from './Redux/Action'
import 
function App() {
  const dispatch = useDispatch()
  dispatch(setDataAction(data))
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}