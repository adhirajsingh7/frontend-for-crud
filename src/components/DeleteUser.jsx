import axios from 'axios'
import React, { useState } from 'react'

const DeleteUser = () => {

    const [user, setUser] = useState({
        name : ''
    })

    const handleChange =(e)=>{
        const {name ,value} = e.target
        setUser({[name] : value})
    }

    const deleteUser = async()=>{
        try {
            const res = await axios.delete(`http://localhost:8080/delete/${user.name}`);
            // console.log(res.data)
            console.log(res.response.data);
        }catch (error) {
            console.log(error);
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        deleteUser()
        // console.log(user);
    }


  return (
    <>
    <div style={{margin: 10}}>
    <div>DeleteUser</div>
    <form>
        <input type="text" name="name" placeholder='Enter name' onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Delete</button>
    </form>
    </div>
    </>
  )
}

export default DeleteUser