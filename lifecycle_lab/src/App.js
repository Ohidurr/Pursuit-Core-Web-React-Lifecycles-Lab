import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Form from './components/form'
import ToDo from './components/todoList'

class App extends React.Component {
  state = {showToDo: true}
  handleRemove = () => {
    this.setState((prevState) => ({
      showTodo: !prevState.showToDo
    }))
  }
  render(){
  return (
    <div className="App"> 
      <Form/>
      <button onClick={this.handleRemove}>-</button>
      {this.showToDo ? <ToDo/> : null}
    
    </div>
  )
  }
}

export default App;
