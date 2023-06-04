
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'

export default function Form() {
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
    );
    return (

        console.log(thisData),

        <div className="containTextArea">
            <div className="containDetails">
                <div className='avatar'><img src='dataInfo.personimage' ></img></div>
                <div className='title'>{thisData.subject}</div>

                <div className="textDet">
                    <span className="reciver"><b>در جواب :</b>{thisData[0].contactinfo} </span>
                    <span className="reciver"> {thisData[0].messagebody} <b>:متن پیام </b></span>
                </div>

            </div>
            <textarea className="textArea" />
            <button className="send">ارسال</button>
        </div>
    )
}