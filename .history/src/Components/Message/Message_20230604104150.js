import './Message.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateImportant, addToData } from '../../Redux/Action'
import { useEffect } from 'react';

function Message(props) {


    const data = useSelector(state => state.data);

    useEffect(() => {
        console.log(data);
    }, [data]);

    let dataInfo = data[props.index]

    const now = new Date();
    const targetDate = dataInfo.createdate;
    const target = new Date(targetDate);
    const hours = target.getHours()
    const minunts = target.getMinutes()
    const seconds = target.getSeconds()
    const diff = now.getTime() - target.getTime();
    const diffSeconds = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dateeee1 = target.getDate()
    const dateeee2 = target.getFullYear()
    const dateeee3 = target.getDay()
    const dispatch = useDispatch()


    const render = () => {

        return <div className="Message">
            <div className=''></div>
            <div className='containRep'>
           <textarea className="textArea" id={`${dataInfo.uniqueid}`} />
            <button className="send" id={`${dataInfo.uniqueid}vv`} onClick={() => {
                dispatch(addToData([{}]));

            }}>ارسال</button>
           </div>  
        </div>
        
    }


    return (
        render()
    );
}


export default Message;
