import './Message.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateImportant } from '../../Redux/Action'
import { useEffect } from 'react';

function Message(props) {

    let data;
    let dataInfo;


    const GettingData = () => {
        data = useSelector(state => state.data);
        dataInfo = data[props.index]

    }

    useEffect(() => {
        GettingData()
    }, [])



    const now = new Date();
    const targetDate = dataInfo.createdate;
    const target = new Date(targetDate);
    const hours = target.getHours()
    const minunts = target.getMinutes()
    const seconds = target.getSeconds()
    const diff = now.getTime() - target.getTime();
    const diffSeconds = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dateeee1 = target.getDate()
    const dateeee2 = target.getFullYear()
    const dateeee3 = target.getDay()
    const dispatch = useDispatch()




    const render = () => {

        return <div className="Message">
            <div className='avatarAndTitle'>
                <div className='avatar'><img src='dataInfo.personimage' ></img></div>

                <div className='titleAndSender'>

                    <div className='senderAndStatus'>
                        <div className='sender'>{dataInfo.contactinfo}</div>
                        <div className='status'>
                            <div className='circle' style={{ backgroundColor: dataInfo.lablecolor1 }}></div>
                            <div className='circle' style={{ backgroundColor: dataInfo.lablecolor2 }}></div>
                            <div className='circle' style={{ backgroundColor: dataInfo.lablecolor3 }}></div>
                        </div>
                    </div>
                    <div className='title'>{dataInfo.subject}</div>
                    <div className='reciver'>{ }</div>
                </div>
            </div>
            <div className='repAndDetail'>
                <div className='icon1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                </svg>
                </div>
                <div className='icon2'>

                    {dataInfo.isImportant ? <svg onClick={() => { dispatch(updateImportant(dataInfo.uniqueid, !dataInfo.isImportant)) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD600" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> :
                        <svg onClick={() => { dispatch(updateImportant(dataInfo.uniqueid, !dataInfo.isImportant)) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>}



                </div>
                <div className='icon3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-all" viewBox="0 0 16 16">
                    <path d="M8.098 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L8.8 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L4.114 8.254a.502.502 0 0 0-.042-.028.147.147 0 0 1 0-.252.497.497 0 0 0 .042-.028l3.984-2.933zM9.3 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                    <path d="M5.232 4.293a.5.5 0 0 0-.7-.106L.54 7.127a1.147 1.147 0 0 0 0 1.946l3.994 2.94a.5.5 0 1 0 .593-.805L1.114 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.5.5 0 0 0 .042-.028l4.012-2.954a.5.5 0 0 0 .106-.699z" />
                </svg></div>
                <div className='icon4' onClick={() => window.location.href = `details/${dataInfo.uniqueid}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply" viewBox="0 0 16 16">
                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                </svg></div>


                <div className='date'>
                    <div className='time' style={{ color: "blue", paddingRight: "20px", paddingLeft: "20px" }}>{hours + ":" + minunts + ":" + seconds}</div>
                    <div className='datee'>{dateeee3 + "/" + dateeee1 + "/" + dateeee2}</div>
                    <div className='ago' style={{ color: "red", paddingRight: "20px", paddingLeft: "20px" }}>    ({diffSeconds}روز پیش)</div>

                </div>
            </div>

        </div>
    }


    return (
        render()
    );
}


export default Message;
