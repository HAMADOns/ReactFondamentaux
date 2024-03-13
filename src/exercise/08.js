// Les States
// http://localhost:3000/alone/exercise/08.js

import * as React from 'react'

// 🐶 Créé un fonction 'addSkillPython' qui ajoute le skill Python
// 🤖 skills.push({id:'xxxx', value: 'Python'})
// 🤖 Utilise {id:`${Math.random()}` pour générer un id aléatoire
// 🐶 dans la fonction 'addSkillPython' logue le tableau skills
// 🤖 console.log('skills',skills)

const initialskills = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]


// 🐶 Créé un button dans le render et sur l'evenement onclick passer la fonction 'addSkillPython'
// 🤖 <button onClick={addSkillPython}
function MesSkills() {
  const [skills,setSkills] = React.useState(initialskills)
  function addSkillPython (){
    // skills.push( {id : `${Math.random()}` , value : 'Python'})
    // console.log('skills',skills)
    setSkills([...skills , {id : `${Math.random()}` , value : 'Python'}])
  }
  return (
    <>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.value}</li>
        ))}
      </ul>
      <button onClick={addSkillPython}>Ajouter Skill Python</button>      
    </>    
  )
}

function App() { 
   
  return <MesSkills /> 
}

export default App
