import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'
 class lifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'ommii'

         }
         console.log('lifecycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getderivedstatefromprops') 
        return null
     }
     componentDidMount(){
         console.log('lifecycleA componentdidmountA')
     }
     
    render() {
        console.log('lifecycleA render')
        return (
            <div>
            <div>
                lifecycleA
            </div>
            <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default lifeCycleA
