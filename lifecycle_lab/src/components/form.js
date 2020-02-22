import React, { Component } from 'react'
import ToDo from './todoList'
class Form extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.state);
        
        return(
            <div>
            <from onSubmit='submit'>
            <ToDo/>
                <input type="text" placeholder="todo"></input>
                
            </from>
            </div>
        )
    }
}

export default Form