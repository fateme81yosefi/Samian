
import "./Form.css"
export default function Form(){
    return(
        console.log(window.location.pathname-"/details/"),
        <div className="containTextArea">
            <span className="reciver">در جواب : فاطمه یوسفی</span>
            <span className="reciver">متن پیام  :  </span>

                    <textarea className="textArea"/>
                    <button className="send">ارسال</button>
        </div>
    )
}