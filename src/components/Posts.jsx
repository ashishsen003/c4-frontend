import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [data, setdata] = useState([])
    const [editpost, seteditpost] = useState('')
    const [body, setbody] = useState('')
    const [title, settitle] = useState('')
    const [device, setdevice] = useState('')


    fetch('https://mushy-beanie-jay.cyclic.app/posts', {
        headers:{
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setdata([...data])
    })
    .catch(err=>console.log(err))

    const handleedit = ()=>{

    }

    const handledelete = (el)=>{
        fetch(`https://mushy-beanie-jay.cyclic.app/posts/delete/${el._id}`, {
        headers:{
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setdata([...data])
        })
        .catch(err=>console.log(err))
        }

  return (
    <div>
        <h3>All posts</h3>        
        {data.map((el, i)=>{
            return (
                <div>
                    <p>{el.tiitle}</p>
                    <p>{el.body}</p>
                    <p>{el.device}</p>
                    <button onClick={(e)=>{handleedit(el)}}>edit</button>
                    <button onClick={(e)=>{handledelete(el)}}>delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Posts