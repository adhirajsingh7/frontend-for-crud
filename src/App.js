import { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import DeleteUser from './components/DeleteUser';
import UserTable from './components/UserTable';

function App() {

  const [users, setUsers] = useState([]);

  return (
    <>
    <CreateUser users={users} setUsers={setUsers}/>
    <DeleteUser users={users} setUsers={setUsers} />
    <UserTable users={users} setUsers={setUsers}/>
    </>
  );
}

export default App;
