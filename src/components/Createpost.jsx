import React, { useState } from 'react'

const Createpost = () => {

    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const [device, setdevice] = useState('')
    
    const handleCraete = ()=>{
        const payload = {title, body, device}

        fetch('https://mushy-beanie-jay.cyclic.app/posts/add', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }


  return (
    <div>
        <input type="text" placeholder='title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <input type="text" placeholder='body' value={body} onChange={(e)=>setbody(e.target.value)} />
        <input type="text" placeholder='device' value={device} onChange={(e)=>setdevice(e.target.value)} />
        <button onClick={handleCraete}>Cretae</button>
    </div>
  )
}

export default Createpost