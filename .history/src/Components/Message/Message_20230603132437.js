import './Message.css';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Message(props) {

    useEffect(() => {
      
    }, [dataInfo.isImportant])
    


    const render=()=>{
        re
    }

    console.log(props)
    const data = useSelector(state => state.data);
    console.log(data[props.index])
    let dataInfo = data[props.index]
    return (
      
    );
}


export default Message;
