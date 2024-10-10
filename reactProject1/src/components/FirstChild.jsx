import React from 'react'
import SecondChild from './SecondChild';

const FirstChild = (props) => {
    console.log(props.props.prop1);
    console.log(props.props.prop2);
    console.log(props.props.num);
  return (
    <div>
        <SecondChild  props={{prop1,prop2,num}}></SecondChild>
    </div>
  )
}

export default FirstChild