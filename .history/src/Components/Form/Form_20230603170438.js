
import "./Form.css"
export default function Form(){
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