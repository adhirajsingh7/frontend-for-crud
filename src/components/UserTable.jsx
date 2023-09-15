import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserTable = ({users, setUsers}) => {

  
    
   const apicall = async()=> {
    try{
        console.log('a')
        const res = await axios.get('http://localhost:8080/')
        setUsers(res.data)
        console.log(res);
    } catch(error){
        console.log(error);
    }
   }
   
    useEffect(()=>{
        apicall()
    },[])

  return (
    <>
    <div>UserTable</div>
    <ul>
    {
        users?.map((item,key)=>{
            return <li key={key}>{item.name}</li>
        })
    }
    </ul>
    </>
  )
}

export default UserTable