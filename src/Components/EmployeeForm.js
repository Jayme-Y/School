import '../Content/EmployeeForm.css';
import React from "react";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      dept: ''
    };
  }

  inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  hitSubmit = (e) => {
    e.preventDefault();
    const { name, email, title, dept } = this.state;
    this.props.handleFormSubmit({ name, email, title, dept });
    this.setState({
      name: '',
      email: '',
      title: '',
      dept: ''
    });
  };

  render() {
    return (
      <form className="employee-form" onSubmit={this.hitSubmit}>
        <h2>Enter New Employee</h2>
        <div>
          <label><strong>Name:</strong> </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label><strong>Email:</strong> </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label><strong>Title:</strong> </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label><strong>Dept:</strong> </label>
          <input
            type="text"
            name="dept"
            value={this.state.dept}
            onChange={this.inputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;