import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

const Props = () => {
    let r1="Rs500"
    let r2="Navaz"
    let r3 ="navaz@gmail.com"
    let num =233;
    let array =[12,13,13,123,2,4];
  return (
    <div>
        <Child1 props={{...r1,r2,r3,num}}></Child1>
        {/* <Child2 arr={{array}}></Child2> */}
        {/* <Child3></Child3> */}
    </div>
  )
}

export default Props