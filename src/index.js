/* import React from 'react'
import ReactDOM from 'react-dom'
 */


 /* const element = <h1>hello world</h1>
const container = document.getElementById('root')

ReactDOM.render(element, container)
 */

/*  const user = {
   firstName: 'gabriel',
   lastName: 'matias',
   avatar: 'https://images.vexels.com/media/users/3/202601/isolated/preview/0a7239c15d7655635f28fc8aa8777e3a-icono-de-cr-aacute-neo-malvado-negro-by-vexels.png',
 }

 function getName(user){
   return `${user.firstName} ${user.lastName}`
 }
 
 function getGreeting(user){
   if(user){
     return getName(user)
    }else{
      return <h2> no nene</h2>
    }
  }
  
  //const element = <h2> Hola {getName(user)}</h2>
  const element =(
    <div>
      <h1>{getGreeting(user)}</h1>
      <img src={user.avatar}/>
    </div>
  )
 */

 
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Style.css'
import App from './components/App'

 const container = document.getElementById('root')

 ReactDOM.render(<App />, container)

/**
 * para iniciar servidor de la pagina
 * @npm start
 * 
 */