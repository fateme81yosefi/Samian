
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'

export default function Form(){
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
      );
    return(
        
        // console.log(window.location.pathname.split("/")[2]),

        <div className="containTextArea">
            <span className="reciver">{thisData.contactinfo}در جواب : فاطمه یوسفی</span>
            <span className="reciver">متن پیام  :  </span>

                    <textarea className="textArea"/>
                    <button className="send">ارسال</button>
        </div>
    )
}