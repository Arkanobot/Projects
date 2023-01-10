import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };

    this.addCallback = this.addCallback.bind(this);
    this.editCallback = this.editCallback.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
    this.completeCallback = this.completeCallback.bind(this);
  }

  addCallback(taskName, status) {
    const uniqueId = Date.now();
    const newState = [
      ...this.state.todoList,
      { id: uniqueId, name: taskName, completed: status },
    ];
    this.setState({
      todoList: newState,
    });
  }

  editCallback(id, taskName) {
    const editTask = prompt("Please enter a new Task Name", taskName);
    const allTasks = this.state.todoList;
    const position = allTasks.findIndex((el) => el.id === id);
    allTasks[position] = {
      id: id,
      name: editTask,
      completed: 1,
    };
    this.setState({
      todoList: allTasks,
    });
  }

  deleteCallback(id) {
    const allTask = this.state.todoList;
    const newList = allTask.filter((el) => el.id !== id);
    this.setState({
      todoList: newList,
    });
  }

  completeCallback(id, taskName) {
    const allTsk = this.state.todoList;
    const position = allTsk.findIndex((el) => el.id === id);
    allTsk[position] = {
      id: id,
      name: taskName,
      completed: 0,
    };
    this.setState({
      todoList: allTsk,
    });
  }

  render() {
    return (
      <div className="container">
        <Card border="primary">
          <div className="cal-lg-5">
            <Card.Header className="bg-primary text-white">
              <h3>My To-Do List</h3>
            </Card.Header>
            <Card.Body>
              <AddTodo addCallBack={this.addCallback} />
              <TodoList
                tasks={this.state.todoList}
                editCallBack={this.editCallback}
                deleteCallBack={this.deleteCallback}
                completeCallBack={this.completeCallback}
              />
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  }
}

export default Main;
