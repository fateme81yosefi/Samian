import Message from '../Message/Message';
import './Home.css';
import { useSelector } from 'react-redux'

function Home() {
  const data = useSelector(state => state.data)
  console.log(data)
  return (
    <div className="Home">
      return{data.map((item , index)=>{
      <Message></Message>

      })}
    </div>
  );
}

export default (Home)