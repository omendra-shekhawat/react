import React , { Component } from 'react'
class message extends Component{
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }

    }
    chanMessage(){
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    render()
        {

            return(
                <div>
                     <h1>{this.state.message}</h1>
                     <button onClick={()=> this.chanMessage()}>subscribe</button>
                </div>
            )
               
    }
} 
export default message