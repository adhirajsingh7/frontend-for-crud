import axios from 'axios';
import React, { useState } from 'react'

const CreateUser = ({setUsers}) => {

    const [formValue, setFormValue] = useState({
        name : '',
        designation: '',
        email: '',
        phone: '',
        age: '',
    });

    const addUser = async()=>{
        try {
            const res = await axios.post('http://localhost:8080/add',formValue)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleChange =(e)=>{
        const {name ,value} = e.target;
        setFormValue({...formValue, [name] : value}) 
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        addUser(formValue)
        setUsers(state=> [...state,formValue])

        // console.log(formValue);
    }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-around'}}>
    <div>CreateUser</div>
    
    <form >
        <div>
        <input type="text" name='name' placeholder='name' value={formValue.name} onChange={handleChange}/>
        </div>
        <div>
        <input type="text" name='designation' placeholder='designation' value={formValue.designation} onChange={handleChange}/>
        </div>
        <div>
        <input type="text" name='email' placeholder='email' value={formValue.email} onChange={handleChange}/>
        </div>
        <div>
        <input type="number" name='phone' placeholder='phone' value={formValue.phone} onChange={handleChange}/>
        </div>
        <div>
        <input type="number" name='age' placeholder='age' value={formValue.age} onChange={handleChange}/>
        </div>
        <div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    
    </div>
    </>
  )
}

export default CreateUser