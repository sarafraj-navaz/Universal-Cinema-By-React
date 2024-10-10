import React, { Fragment } from 'react'

const Task5 = () => {
    let students =["navaz","shaikh","Sarafraj"]
    // let students =[]
  return (
    <div>
        {students.length>0 ? students.map((value, index) =>{
           return (
            <Fragment key={index}>
                <h1>Name : {value}</h1>
            </Fragment>
           ) 
        }
        )
        :"today is sunday so Students are on leave"
    }
    </div>
  )
}

export default Task5