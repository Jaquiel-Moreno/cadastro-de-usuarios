

import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.png'
import api from '../../services/api'


//React hooks

function Home() {

 const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputUF  = useRef()
 

  async function getUsers() {
    const usersFropmApi = await api.get('/usuarios')

    setUsers(usersFropmApi.data)

  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      uf:  inputUF.current.value
   
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete (`usuarios/${id}`)
  
    getUsers()
  }

  function clearFields() {
    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';
    inputUF.current.value = '';
  }
  

  useEffect(() => {
    getUsers()
  }, [])


  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Name' name='name' type='text' ref={inputName} />
        <input placeholder='Age' name='age'type='number' ref={inputAge} />
        <input placeholder='Email' name='email' type='text' ref={inputEmail} />
        <input placeholder='UF' name='uf' type='text' ref={inputUF} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
        <button className='clearField' type="button" onClick={clearFields}>Limpar Campos</button>
      </form>



      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Name:   <span>{user.name}  </span></p>
            <p>Age:    <span>{user.age}   </span></p>
            <p>Email:  <span>{user.email} </span></p>
            <p>UF:     <span>{user.uf}    </span></p>
          </div >
          <button onClick={ () => deleteUsers(user.id)}>  
            <img src={Lixeira} title='delete' />
          </button>

        </div>

      ))}




    </div>

  )
}

export default Home
