import React, { Component } from "react";

 const Tasks = ['acorda', 'toma banho', 'tomar café da manhã', 'estudar', 'estudar mais'];
 const result =  Tasks.map((Task) => <li> {Task} </li>);

class Task extends Component {
  render() {   
    return (
        <div>
          <ul>
            { result }
          </ul>
        </div>
    ); 
  };
}


export default Task;
