// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

import * as React from 'react'

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

const skills = ['HTML', 'CSS', 'JS', 'REACT', 'ANGULAR']
// 🐶 Corrige ce code avec des keys uniques sur les elements <li>


// skills.push(<li>HTML</li>)
// skills.push(<li>CSS</li>)
// skills.push(<li>JS</li>)
// skills.push(<li>REACT</li>)
// skills.push(<li>ANGULAR</li>)

function MesSkills() {
  return <ul>{skills.map((skill , index) => <li key = {index}> {skill}</li>)}</ul>
}

function App() {
  return <MesSkills />
}

export default App
