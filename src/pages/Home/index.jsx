
import './style.css'
import Lixeira from '../../assets/lixeira.png'


function Home() {

  const users = [{
    id: '2342asdfg',
    name: 'jaquiel',
    age: 37,
    eamil: 'jaqueil.moreno@oultook.com',
  },
  {
    id: '23423456asdfg',
    name: 'heloisa',
    age: 37,
    eamil: 'holoisas.moreno@oultook.com',
  },
  ]


  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Name' name='name' type='text' />
        <input placeholder='Age' name='age' type='number' />
        <input placeholder='Email' name='email' type='text' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Name:   {user.name} </p>
            <p>Age:    {user.age} </p>
            <p>Email:  {user.eamil}</p>
            </div>
            <button>
              <img src={Lixeira} />
            </button>
          
        </div>

      ))}




    </div>

  )
}

export default Home
