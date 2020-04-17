// This file routes into Expander.js
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./login.css"

const Signup = (props) => {
  return (
    <Form style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
    <div id="formE" style={{display:"flex"}}>
      <FormGroup>
        <Label for="exampleFirstName" >First Name</Label>
        <Input placeholder="First Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleLastName">Last Name</Label>
        <Input placeholder="Last Name" />
      </FormGroup>
      </div>
      <div style={{display:"flex"}}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      </div>
    {/* </div> */}

      <Button id="mainBtn">Submit</Button>
    </Form>
  );
}

export default Signup;