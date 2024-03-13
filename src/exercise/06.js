// Ajouter du Style CSS
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'

// 🐶 Créé un composant ButtonActions
// 🐶 Conditionne le rendu en fonction d'un prop 'isAdmin'
// Si isAdmin est false alors on affichera que le bouton 'Lire'
// 🤖 ButtonActions({isAdmin})

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

function AdminActions (){
  return <div>{buttonRead}{buttonCreate}{buttonUpdate}{buttonDelete} </div>
}

function GuestActions (){
  return  <div> {buttonRead} </div> 
}
function ButtonActions({isAdmin = false , hidden}){ 
   if (hidden){
    return null
   }
    return  isAdmin ? <AdminActions/> : 
   <GuestActions/> 
  
}


function App() {
  return (
       
      <ButtonActions isAdmin = {true} hidden = {false} />
    
  )
}

export default App
