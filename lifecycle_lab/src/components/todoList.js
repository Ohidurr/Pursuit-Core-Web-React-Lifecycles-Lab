import React, { Component } from 'react'

class ToDo extends Component{

    constructor(props){
        super(props)
        this.state =({Todo: ""})
    }
    componentDidMount(){

    }
    


    render(){
        return(
            <div>
                <button>-</button>
            </div>
        )
    }
}

export default ToDo;