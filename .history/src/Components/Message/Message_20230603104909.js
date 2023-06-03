import './Message.css';



function Message() {
    let data = require('../../Data/data.json');

    console.log(data.data);
    ;

    return (
        <div className="Message">
            <div className='avatarAndTitle'>
                <div className='avatar'><img src='' ></img></div>

                <div className='titleAndSender'>

                    <div className='senderAndStatus'>
                        <div className='sender'>gfhdfgj</div>
                        <div className='status'>
                            <div className='ffff'></div>
                            <div className='ffff'></div>
                            <div className='ffff'></div>
                        </div>
                    </div>
                    <div className='title'>e.kfjvgnbkjdf</div>

                </div>
            </div>
            <div className='repAndDetail'>
                <div className='icon1'>asds</div>
                <div className='icon2'>asdasd</div>
                <div className='icon3'>asdasd</div>
                <div className='icon4'>asdsad</div>
                <div className='date'>asdasd</div>
            </div>

        </div>
    );
}

export default Message;
