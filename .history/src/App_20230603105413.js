import './App.css';
import Home from './Components/Home/Home';

function App() {
  export const setText = (text) => ({
    type: 'SET_TEXT',
    payload: text
  })
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
