// Ajouter du Style CSS
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../05-styles.css'

// 🐶 Met du style sur les 3 conteneurs en te basant sur leur texte.
// 🐶 Nous avons importé le fichier CSS qui contient des classes
// 'container' 'container-small' etc ...

// 🐶 Utilise le prop `className` pour les propriétés générales du conteneur et une
// une specificité. (className aura donc 2 classes CSS)
// 🤖 className='container container-small' par exemple

// 🐶 Utilise ensuite du CSS Inline avec le prop `style` pour gerer le background color
// et la couleur du texte
// 🤖 style:{{color:'white', backgroundColor:'red'}}

const smallContainer = <div className="container-small" style={{color:'white', backgroundColor:'black'}}>Petit conteneur dark texte blanc</div>
const mediumContainer = <div className="container--medium" style={{color:'black', backgroundColor:'pink'}}>Moyen conteneur rose texte noire</div>
const largeContainer = <div className="container--large " style={{color:'black', backgroundColor:'green'}}>Grand conteneur vert rose texte noire</div>

function App() {
  return (
    <div>
      {smallContainer}
      {mediumContainer}
      {largeContainer}
    </div>
  )
}

export default App
