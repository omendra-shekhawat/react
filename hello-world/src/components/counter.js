import React, { Component } from 'react'

 class counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     increment() {
        this.setState({
            count: this.state.count + 1
        }, 
        ()=> {console.log('callback valuew', this.state.count)}
        )
       
     }
    render() {
       
        return(
            <div>
               <div> count- {this.state.count}</div>
               <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}


export default counter

//compm a b