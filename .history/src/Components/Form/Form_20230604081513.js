
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'

export default function Form(){
    const data = useSelector(state => state.data);
    const filteredCountries = data.filter(
        (country) => country[0].toLowerCase() === "a"
      );
    return(
        
        console.log(window.location.pathname.split("/")[2]),
        <div className="containTextArea">
            <span className="reciver">در جواب : فاطمه یوسفی</span>
            <span className="reciver">متن پیام  :  </span>

                    <textarea className="textArea"/>
                    <button className="send">ارسال</button>
        </div>
    )
}