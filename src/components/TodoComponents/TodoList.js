import React from "react";
import ToDo from "./Todo";

class ToDoList extends React.Component{

    render() {
        return(
            <>
            {this.props.data.map(toDo => <ToDo key = {toDo.id} toDo = {toDo}/>)}
            </>
        )
    }
}

export default ToDoList
