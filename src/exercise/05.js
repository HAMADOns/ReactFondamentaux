// Ajouter du Style CSS
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../05-styles.css'


const smallContainer = <div className="container container--small" 
        style={{color:'white', backgroundColor:'darkslateblue'}}>
        Petit conteneur dark texte blanc</div>
const mediumContainer = <div className="container container--medium" 
        style={{color:'black', backgroundColor:'pink'}}>
        Moyen conteneur rose texte noire</div>
const largeContainer = <div className="container container--large " 
        style={{color:'black', backgroundColor:'green'}}>
        Grand conteneur vert rose texte noire</div>

function Container({className, children,style}){
      return <div className={'container '+className} children={children} style={style}></div>
}


function App() {
  return (    
    <div>
    <Container className={'container--small'} style={{color:'white' , backgroundColor:'pink'}}>Ceci est un test</Container>
      {smallContainer}
      {mediumContainer}
      {largeContainer}
    </div>
  )
}

export default App
