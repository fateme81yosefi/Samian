import Message from '../Message/Message';
import './Home.css';



function Home() {
  let data = require('../../Data/data.json');

    console.log(data.data);
  ;

  return (
    <div className="Home">
      <Message></Message>
    </div>
  );
}

export default Home;
