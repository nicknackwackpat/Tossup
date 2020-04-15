// This file contains a "Signup here" button, which, when clicked, expands into the signup form.
// It should be imported into the LoginPage, along with the nav and carousel. The four elements together are the sign up page.
import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Signup from "./signup.js";

// Expander for SignUp info; goes after login stuff
const SignupExpander = () => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }} onClick={() =>
      document.getElementById("formE").scrollIntoView({behavior:"smooth"})
    }>
      Sign Up!
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Signup />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default SignupExpander;
