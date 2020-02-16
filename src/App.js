import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm"
import ToDoList from "./components/TodoComponents/TodoList"

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
] 



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      toDo: data,
      newToDo: ""
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault()
    this.setState({})
  }

  submitHandlerProps = props => {
    this.setState({})
  }

  render() {
    return (
      <div>
        <ToDoForm onChange = {this.onChange} onSubmit = {this.onSubmit}/>
        <ToDoList data = {data}/>
      </div>
    );
  }
}

export default App;
