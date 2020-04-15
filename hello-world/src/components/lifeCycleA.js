import React, { Component } from 'react'
import lifeCycleB from './lifeCycleB'

class LifecycleA extends Component {
    constructor(props){
super(props)

this.state = {
    time: new Date().toLocaleString()

    

}
// console.log('LifecyleA constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('Lifecycle getDerivedStateFromProps')
return null
}

componentDidMount(){
    // console.log('LifecycleA componentDidMount')
    this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
}
componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

shouldComponentUpdate(){
    // console.log('LifecycleA render')
    return true
}
//  getSnapshotBeforeUpdate(){
//      console.log('LifecycleA getSnapshotBeforeUpdate')
//  return null
//     }

// componentDidUpdate(){
//     console.log('componentDidUpdateA')
// }

// changeState = () => {
//     this.setState({
//         name: 'Rapidops'
//     })

// }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div> LifecycleA</div>
            {/* <button onClick={this.changeState} >Change state</button> */}
            <lifeCycleB />
            <p className="App-clock">
            Time:  {this.state.time}
          </p>
            </div>
        )
    }
}

export default LifecycleA