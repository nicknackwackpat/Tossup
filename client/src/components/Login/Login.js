import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  }

    handleInputChange = event => {
    event.preventDefault();
    // Updating the input's state
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
  return (
    <Form className="login-form">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input onChange={this.handleInputChange} value={this.state.email} type="email" name="email" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input onChange={this.handleInputChange} value={this.state.password} name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
        <Button id="mainBtn" type="submit" onClick={(e) => this.props.login(e, this.state.email, this.state.password)}>Submit</Button>
    </Form>
      );  
    }
}
export default LoginForm;