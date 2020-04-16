import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input onChange={props.handleInputChange} value={props.email} type="email" name="email" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input onChange={props.handleInputChange} value={props.password} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
        <Button type="submit" onClick={props.login}>Submit</Button>
    </Form>
      );
    }
export default LoginForm;