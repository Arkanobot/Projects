import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tdList: this.props.tasks,
    };
  }

  render() {
    return (
      <section id="todo-list">
        <Table striped bordered hover>
          <thead className="bg-dark text-light fs-5">
            <tr>
              <th className="col-md-1">Task No.</th>
              <th className="col-md-6">Task</th>
              <th className="col-md-3" colSpan={3}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((el, key) => {
              if (el.completed == 1) {
                return (
                  <tr>
                    <td>{key + 1}</td>
                    <td className="fs-5">{el.name}</td>
                    <td>
                      <Button
                        onClick={() =>
                          this.props.completeCallBack(el.id, el.name)
                        }
                        variant="outline-success rounded-0"
                        id="button-addon2"
                      >
                        Complete
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => this.props.editCallBack(el.id, el.name)}
                        className="btn btn-outline-dark"
                        variant=" rounded-0"
                        id="button-addon2"
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => this.props.deleteCallBack(el.id)}
                        className="btn btn-outline-danger"
                        variant=" rounded-0"
                        id="button-addon2"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr className="bg-success text-light">
                    <td className="text-light">{key + 1}</td>
                    <td className="fs-5 text-light">
                      <del>{el.name}</del>
                    </td>
                    <td>
                      {/* <Button
                        onClick={() =>
                          this.props.completeCallBack(el.id, el.name)
                        }
                        variant="outline-dark rounded-0"
                        id="button-addon2"
                      >
                        Complete
                      </Button> */}
                    </td>
                    <td>
                      <Button
                        onClick={() => this.props.editCallBack(el.id, el.name)}
                        className="btn btn-outline-dark"
                        variant=" rounded-0"
                        id="button-addon2"
                      >
                        Edit
                      </Button>
                    </td>

                    <td>
                      {/* <Button
                        onClick={() => this.props.deleteCallBack(el.id)}
                        className="btn btn-outline-danger"
                        variant=" rounded-0"
                        id="button-addon2"
                      >
                        Delete
                      </Button> */}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </section>
    );
  }
}

export default TodoList;
