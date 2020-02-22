import React, { Component } from 'react'
import ToDo from './todoList'
class Form extends Component{
    
    render(){
        console.log(this.state);
        
        return(
            <div>
            <from onClick>

                <input type="text" placeholder="todo"></input>
                
            </from>
            </div>
        )
    }
}

export default Form