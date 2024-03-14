// Les formulaires
// http://localhost:3000/alone/exercise/08.js

import * as React from 'react'

// function handleSubmit(event){
//   event.preventDefault()
//   alert (`bonjour ${event.target.elements.emailInput.value}`)
// }
function LoginForm() {

  const [error,setError] = React.useState()
  const [email, setEmail ] = React.useState()
  const handleChange = event => {
    setError (event.target.value.includes('@') ? null : 'email non valide')
    setEmail(event.target.value)
  }
  const handleSubmit = event => {event.preventDefault()
    alert (`bonjour ${email}`)}
  // 🐶 Gère l'événement onSubmit de <form> en créant une fonction 'handleSubmit'
  // 🤖 <form onSubmit={handleSubmit}>
  // 🤖 Utilise `event.preventDefault()` dans la fonction handleSubmit pour stopper
  // le comportement par defaut du formulaire (soumission et rafraichissement page)

  // 🐶 Affiche ensuite une popup Bonjour 'email@email.fr'
  // 🤖 Utilise `event.target.elements.emailInput.value` pour récupèrer la valeur de l'email
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Adresse email :
        <input type="text" name="emailInput" value = {email} onChange={handleChange} />
      </label>
      <input type="submit" value="Connexion" />
      <div style = {{color : 'red'}}  > {error} </div>
    </form>
  )
}

function App() {
  return <LoginForm />
}

export default App
