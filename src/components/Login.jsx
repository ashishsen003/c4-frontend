import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const handleLogin =()=>{
        const payload = {
            email, pass
        }
        console.log(payload);
        fetch('https://mushy-beanie-jay.cyclic.app/users/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            localStorage.setItem('token', data.token)
        })
        .catch(err=>console.log(err))

    }

  return (
    <div>
        <input type="text"  value={email} placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="pass"  value={pass} placeholder='pass' onChange={(e)=>setpass(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login