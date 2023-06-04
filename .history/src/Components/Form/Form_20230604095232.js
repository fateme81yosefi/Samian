import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'
import { addToData } from '../../Redux/Action'
import { useState } from 'react';

export default function Form() {
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
    );
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        contactinfo: "",
        createdate: "",
        createuserid: "",
        deadlinedate: "",
        flagduedate: "fdhdfh",
        fromcontactimage: "dfhfdh",
        fromcontactinfo: "dfhfdh",
        isImportant: false,
        lablecolor1: "dfhfdh",
        lablecolor2: "dfhfdh",
        lablecolor3: "dfhfdh",
        messagebody: "",
        subject: "dfhfdh",
        tocontactinfo: "fdhfdh",
        uniqueid: "fdhfdhhdfhfdhfdhdfhdfh"
    });

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addToData(formData));
        window.location.pathname = "/";
    }

   
    

    return (

        <div className="containTextArea">
            <div className="containTitle"> <div className='title'><b>موضوع:  </b>{thisData[0].subject}</div></div>

            <div className="containDetails">
                <div className='avatar'><img src={thisData[0].personimage} ></img></div>

                <div className="textDet">
                    <span className="reciver"><b>در جواب :</b>{thisData[0].contactinfo} </span>
                    <span className="reciver"> {thisData[0].messagebody} <b>:متن پیام </b></span>
                </div>

            </div>

            <form onSubmit={handleSubmit}>
                <textarea className="textArea" name="messagebody" value={formData.messagebody} onChange={setFormData({messagebody=va})}/>
                <button className="send" type="submit" onClick={handleSubmit}>ارسال</button>
            </form>
        </div>
    )
}
