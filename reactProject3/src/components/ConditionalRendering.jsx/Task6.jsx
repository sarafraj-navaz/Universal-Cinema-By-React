import React from 'react'

const Task6 = () => {
    let name1 ="tanki"
    if(name1=="tanki"){
        // this is not good to use it we have to use only one return statement
        // we can use next return statement like inside map
        return (
            <>
            <h1>my name is {name1}</h1>
            </>
        )
    }
    else{
        return (
            <>
            <h1>my name is not :{name1}</h1>
            </>
        )
    }
  return (
    <div>Task6</div>
  )
}

export default Task6