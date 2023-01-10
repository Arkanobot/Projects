import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTaskName: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSaveHandler = this.onSaveHandler.bind(this);
  }

  onChangeHandler(e) {
    // console.log(e.target.value);
    this.setState({
      currentTaskName: e.target.value,
    });
  }

  onSaveHandler() {
    this.props.addCallBack(this.state.currentTaskName, 1);
  }

  render() {
    return (
      <section className="AddTodo">
        <InputGroup className="mb-3">
          <Form.Control
            className="rounded-0"
            placeholder="What Should I do ?"
            aria-label="To-Do_Input"
            aria-describedby="basic-addon2"
            onChange={this.onChangeHandler}
          />
          <Button
            className="rounded-0"
            onClick={this.onSaveHandler}
            variant="outline-primary"
            id="button-addon2"
          >
            Save
          </Button>
        </InputGroup>
      </section>
    );
  }
}

export default AddTodo;
