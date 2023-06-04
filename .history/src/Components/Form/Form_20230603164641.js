
import "./Form.css"
export default function Form(){
    return(

        <div className="containTextArea">
            <span>در جواب : </span>
                    <textarea className="textArea"/>
                    <button className="send">ارسال</button>
        </div>
    )
}