import React, { Component } from 'react'
 class lifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'ommii'

         }
         console.log('lifecycleB constructor')
     }
     static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getderivedstatefromprops') 
        return null
     }
     componentDidMount(){
         console.log('lifecycleB componentdidmountB ')
     }
     
    render() {
        console.log('lifecycleB render')
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}

export default lifeCycleB
