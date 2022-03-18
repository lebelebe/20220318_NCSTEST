import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Funccontent(){
    const[dbcontent, dbcontentUpdate] = useState('대기해주세요')
    useEffect( async ()=>{
        await axios.post('/getpost/post', {})
        .then( res => {
            dbcontentUpdate(res.data.content);
        })
    }, [])

    return(
        <div>
            <h3>post 나오나?</h3>
            <p>{dbcontent}</p>
        </div>
    )
}

export default Funccontent;