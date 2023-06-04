
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
                            <div className='title' style={{marginBottom:"20px"}}>{thisData[0].subject}</div>

            <div className="containDetails">
                <div className='avatar'><img src='thisData[0].personimage' ></img></div>

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