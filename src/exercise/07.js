// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

import * as React from 'react'

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

const skills = []
// 🐶 Corrige ce code avec des keys uniques sur les elements <li>
skills.push(<li key="1">HTML</li>)
skills.push(<li key="2">CSS</li>)
skills.push(<li key="3">JS</li>)
skills.push(<li key="4">REACT</li>)
skills.push(<li key="5">ANGULAR</li>)

function MesSkills() {
  return <ul>{skills.map(skill => skill)}</ul>
}

function App() {
  return <MesSkills />
}

export default App
