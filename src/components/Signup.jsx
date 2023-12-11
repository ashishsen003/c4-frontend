import React, { useState } from 'react'

const Signup = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')
    const [pass, setpass] = useState('')

    const handleRegsiter = ()=>{
        const payload = {
            name, email, pass, gender
        }
        fetch('https://mushy-beanie-jay.cyclic.app/users/register',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <input type="text" placeholder='gender' value={gender} onChange={(e)=>setgender(e.target.value)} />
        <input type="text" placeholder='pass' value={pass} onChange={(e)=>setpass(e.target.value)} />
        <button onClick={handleRegsiter}>Register</button>
    </div>
  )
}

export default Signup