
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {
 const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=> setUsers(data));
  }, [])

  const handleAddUser = e => {
      e.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = {name, email}
      console.log(user);

      fetch('http://localhost:5000/users', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log('inside post response', data)
      })
  }

  return (
    <>
      <h1>Users management{users.length}</h1>
      {
        users.map(user=><p>{user.id}{user.name}{user.email}</p>)
      }

      <hr />
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name='name' id='' />
        <br />
        <input type="text" name='email' />
        <br />
        <input type="submit" value="Add User" />
      </form>
    
    </>
  )
}

export default App
