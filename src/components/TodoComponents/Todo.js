import React from "react";

class ToDo extends React.Component{

    render() {
        return(
            <>
            <h2>{this.props.toDo.task}</h2>
            </>
        )
    }
}

export default ToDo