// How does this work with layout? Do I just add classes?
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = (props) => {
  return (
    <Form style={{display:"flex", flexDirection:"column"}}>
    <div style={{display:"flex"}}>
      <FormGroup>
        <Label for="exampleFirstName">First Name</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="FirstName placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleLastName">Last Name</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="LastName placeholder" />
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
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
      
      <Button>Submit</Button>
    </Form>
  );
}

export default Signup;