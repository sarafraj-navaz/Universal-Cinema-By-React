import React from 'react'
import Morning from './Morning';
import Afternoon from './Afternoon';
import Evening from './Evening';
import Night from './Night';

const TaskChild3 = (props) => {
    let time =props.props;
    console.log(time);
    let componentToRender;
    switch (time) {
        case "morning":componentToRender=<Morning/>;break;
        case "afternoon":componentToRender=<Afternoon/>;break;
        case "evening":componentToRender=<Evening/>;break;
        case "night":componentToRender=<Night/>;break;
    }
  return (
    <div>
        {componentToRender}
    </div>
  )
}

export default TaskChild3