
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'

export default function Form(){
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
      );
    return(
        
        console.log(thisData),

        <div className="containTextArea">
            <span className="reciver">{thisData[0].contactinfo}در جواب : فاطمه یوسفی</span>
            <span className="reciver">{thisData[0].messagebody}  :  </span>

                    <textarea className="textArea"/>
                    <button className="send">ارسال</button>
        </div>
    )
}