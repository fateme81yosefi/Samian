import './Message.css';



function Message() {
  let data = require('../../Data/data.json');

    console.log(data.data);
  ;

  return (
    <div className="Message">
        <div className='avata'></div>
    </div>
  );
}

export default Message;
