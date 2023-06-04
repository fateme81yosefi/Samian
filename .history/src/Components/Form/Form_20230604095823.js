
import "./Form.css";
import { useSelector, useDispatch } from 'react-redux'
import { addToData } from '../../Redux/Action'
import { useState } from "react";


export default function Form() {
    const data = useSelector(state => state.data);
    const thisData = data.filter(
        (item) => item.uniqueid === window.location.pathname.split("/")[2]
    );
    const dispatch = useDispatch()
    const [xxxxx,setxxxxx]=useState({
        messagebody:""
    })


    return (

        // console.log(thisData),

        <div className="containTextArea">
            <div className="containTitle"> <div className='title'><b>موضوع:  </b>{thisData[0].subject}</div></div>


            <div className="containDetails">
                <div className='avatar'><img src='thisData[0].personimage' ></img></div>

                <div className="textDet">
                    <span className="reciver"><b>در جواب :</b>{thisData[0].contactinfo} </span>
                    <span className="reciver"> {thisData[0].messagebody} <b>:متن پیام </b></span>
                </div>

            </div>
            <textarea className="textArea" onChange={set}/>
            <button className="send" onClick={()=>{ dispatch(addToData(xxxxx));
        
       console.log(data)}}>ارسال</button>
        </div>
    )
}