import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(){
        super()
        this.state ={
            value:10
        }
    }
  render() {
    return (
      <div>LifeCycleMethods : {this.state.value}</div>
    )
  }
}
