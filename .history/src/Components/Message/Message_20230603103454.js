import './Message.css';



function Message() {
  let data = require('../../Data/data.json');

    console.log(data.data);
  ;

  return (
    <div className="Message">
        <div className='avatar'><img src=''/></div>
    </div>
  );
}

export default Message;
