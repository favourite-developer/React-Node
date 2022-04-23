import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Header } from "./components/Header";
import { InnerContainer } from "./components/InnerContainer";
import { BottomImages } from "./components/BottomImages";

const LoginPage = (props) => {
  return (
    <Paper>
      {/* The div containing the sign in text, username and password filed and the log in button */}
      <Container id="centered">
        <Header />

        {/* TextField for both the Login and Paasword TextField */}
        <TextField label="Login" type="text" size="medium" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        {/* The div vointaing the checkbox and forgot password text */}
        <InnerContainer />

        {/* The login button */}
        <Button fullWidth>Login</Button>
      </Container>

      {/* The images design at the bottom of the page */}
      <BottomImages toggleLightMode={props.toggleLightMode} />
    </Paper>
  );
};

export default LoginPage;
