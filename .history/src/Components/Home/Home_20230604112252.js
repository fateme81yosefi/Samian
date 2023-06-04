import Message from '../Message/Message';
import './Home.css';
import { useSelector } from 'react-redux'

function Home() {
  const data = useSelector(state => state.data)
  return (
    <div className="Home">
      {
        data.map((item, index) => {
          return <Message index = {index}></Message>
        })
      }
    </div>
  );
}

export default (Home)