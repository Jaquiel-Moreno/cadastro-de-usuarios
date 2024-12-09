
import './style.css'
import Lixeira from '../../assets/lixeira.png'


function Home() {


  return (

    <div className='container'>
      <form><h1>Cadastro de Usuários</h1></form>
      <input name='name' type='text' />
      <input name='age' type='number' />
      <input name='email' type='text' />

      <button type='button'>Cadastrar Usuário</button>

      <div>
        <div>
            <p>Name:  </p>
            <p>Age:   </p>
            <p>Email: </p>
            <button>
                <img src={Lixeira} />
            </button>
        </div>
      </div>



    </div>

  )
}

export default Home
