import React from 'react'
import Project11 from './components/Project1/Project11'
import Project from './components/Project2/Project'
import UseStateAll from './components/useStateHook/UseStateAll'
import Event from './components/events/Event'
import Props from './components/propsChild/Props'
import Task1 from './components/ConditionalRendering.jsx/Task1'
import ConditionRendering from './components/ConditionalRendering.jsx/ConditionRendering'
import UseRefHook from './components/UseRefHook/UseRefHook'
import LifeCycleMethods from './components/LifeCycleMethods/LifeCycleMethods'

const App = () => {
  return (
    <div>
        {/* it is part of the project1 */}
        <div>
            {/* <Project11></Project11> */}
        </div>
        {/* it is part of the its project2  */}
        <div>
            {/* <Project></Project> */}
        </div>
        {/* we are using props properties */}
        <div>
            {/* <Props></Props> */}
        </div>
        <div>
          {/* <UseStateAll></UseStateAll> */}
        </div>
        <div>
          {/* <Event></Event> */}
        </div>
        <dir>
            {/* <ConditionRendering></ConditionRendering> */}
        </dir>
        <div>
            {/* <UseRefHook></UseRefHook> */}
        </div>
        <div>
          {/* <LifeCycleMethods></LifeCycleMethods> */}
        </div>
    </div>
    

  )
}

export default App