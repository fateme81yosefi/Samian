import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { useDispatch } from 'react-redux'
import { setDataAction } from './Redux/Action'
import data from './Data/data.json';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {


  const dispatch = useDispatch()
  dispatch(setDataAction(data.data))


  return (
    <BrowserRouter>
    <Switch>
      {" "}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/details/2`}>
             return <p>kdjfbjdsf</p>
          </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}