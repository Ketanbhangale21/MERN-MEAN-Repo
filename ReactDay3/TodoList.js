import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== "") {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: "",
      }));
    }
  };

  handleRemoveTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos.splice(index, 1);
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "lightcoral",
            height: "500px",
            width: "500px",
            border: "2px solid black",
            borderRadius: "20px",
            overflow: "auto",
          }}
        >
          <h2
            style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}
          >
            ToDo List
          </h2>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleInputChange}
              placeholder="Enter a new todo"
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px 0 0 5px",
                border: "1px solid #ddd",
                width: "300px",
                marginRight: "0",
                marginBottom: "10px",
              }}
            />
            <button
              style={{
                fontSize: "16px",
                borderRadius: "0 5px 5px 0",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "1px solid #4CAF50",
                cursor: "pointer",
              }}
              onClick={this.handleAddTodo}
            >
              Add
            </button>
          </div>
          <ul
            style={{
              padding: "10px",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            {this.state.todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                onRemove={() => this.handleRemoveTodo(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  handleToggleComplete = () => {
    this.setState((prevState) => ({
      completed: !prevState.completed,
    }));
  };

  render() {
    return (
      <li
        style={{
          backgroundColor: "whitesmoke",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textDecoration: this.state.completed ? "line-through" : "none",
          listStyle: "none", // Removes the default list-style
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd", // Adds a border between items
          margin: "5px 0", // Adds some margin for spacing
          borderRadius: "8px",
        }}
      >
        <div>
          <input
            type="checkbox"
            onChange={this.handleToggleComplete}
            style={{ marginRight: "8px" }} // Adds space between checkbox and text
          />
          {this.props.todo}
        </div>
        <button
          onClick={this.props.onRemove}
          style={{
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-trash3"></i>
        </button>
      </li>
    );
  }
}

export default TodoList;
