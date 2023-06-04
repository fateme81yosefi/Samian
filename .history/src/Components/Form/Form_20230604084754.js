
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'
import { addToData } from '../../Redux/Action'


export default function Form() {
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
    );
    const dispatch = useDispatch()

    return (

        console.log(thisData),

        <div className="containTextArea">
            <div className="containTitle"> <div className='title'><b>موضوع:  </b>{thisData[0].subject}</div></div>


            <div className="containDetails">
                <div className='avatar'><img src='thisData[0].personimage' ></img></div>

                <div className="textDet">
                    <span className="reciver"><b>در جواب :</b>{thisData[0].contactinfo} </span>
                    <span className="reciver"> {thisData[0].messagebody} <b>:متن پیام </b></span>
                </div>

            </div>
            <textarea className="textArea" />
            <button className="send" onClick={() => dispatch(addToData([{
                 contactinfo: "gfgfd", createdate: "jfb", createuserid: "", deadlinedate: "", flagduedate: "", fromcontactimage: "", 
                 fromcontactinfo: "", isImportant: true, lablecolor1: "red", lablecolor2: "blue", lablecolor3: "yellow",
                  messagebody: "fkjdlsg", subject: "jdsbf", tocontactinfo: "f,sdbhf", uniqueid: "534bvhvcxzysgd7834rjhsdb"}]))}</
  