import React from 'react'
import FirstChild from './components/FirstChild'

const App = () => {
  let prop1="prop1";
  let prop2="prop2";
  let num =23;
  return (
    <div>
      <FirstChild props={{prop1,prop2,num}}></FirstChild>
    </div>
  )
}

export default App