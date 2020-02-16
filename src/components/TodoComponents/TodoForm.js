import React from "react";

class ToDoForm extends React.Component{


    render() {
        return(
            <form onSubmit ={this.props.submitHandler}>
                <label>Task:
                    <input 
                        name = "task"
                        type = "text"
                        onChange = {this.props.changeHandler} 
                        />
                </label>
                <button onClick = {this.props.submitHandler}>Submit</button>
            </form>
        )
    }
}

export default ToDoForm;