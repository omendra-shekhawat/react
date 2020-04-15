import React, { Component } from 'react'

const arrUsers=[]
let countID=0
class Table extends Component { 
    constructor(props) {
        super(props)
        this.state = {
             username:'',
             arr: [],
             isAddBtn:true     
        }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value,    
        })
    }
    addUser=()=>{
        arrUsers.push(
            {id:parseInt(400000*Math.random()),
            name:this.state.username
        })
       
        this.setState({
            arr: arrUsers,
            username:""
            
        })
      
    }
    
    updateUser=()=>{
        arrUsers.forEach(user => {
            if(user.id==countID){
                user.name=this.state.username
               
            }  
        });
        this.setState({
            isAddBtn:true,
            arr:arrUsers
        })
        
    }
    edit=(id)=>{
        
        arrUsers.forEach(user => {
            if(user.id==id){
                countID=id
                this.setState({
                    username:user.name,
                    isAddBtn:false
                })
               
            }  
        });
      
    }
    delete=deleteId=>{
        console.log(deleteId)
        arrUsers.forEach(user => {
            if(user.id==deleteId){
                console.log(user,arrUsers.indexOf(user))
                arrUsers.splice(arrUsers.indexOf(user),1)
                console.log("this is arrayuses",arrUsers)
            }
        });
        this.setState({
            arr:arrUsers
        })

    }
    findByID=(ID)=>{
        arrUsers.forEach(user => {
            if(ID==user.id){
                return(user)
            }
        });
    }
    render() {
        
            if (this.state.isAddBtn){
                return(
                <div>
               
                <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
                <button onClick={this.addUser}>ADD</button>    
                <ul>{arrUsers.map(user=>
                    <div key={user.id}><span>{user.name}</span>
                    <button onClick={this.edit.bind(this,user.id)} >EDIT</button>
                    <button onClick={this.delete.bind(this,user.id)} >DELETE</button></div>   
                )}</ul>
            </div>)
            }
            else {
                return(
                    <div>
                
                <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
                <button onClick={this.updateUser.bind(this)}>UPDATE</button>    
                <ul>{arrUsers.map(user=>
                    <div key={user.id}><span>{user.name}</span>
                    <button onClick={this.edit.bind(this,user.id)} >EDIT</button>
                    <button onClick={this.delete.bind(this,user.id)} >DELETE</button></div>  
                )}</ul>
                </div>
                )
            }
            
    }
}
export default Table