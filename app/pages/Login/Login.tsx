import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center  justify-around w-full h-screen  ">
      <div className=" flex flex-col flex-1 justify-center items-center h-2/3 w-full">
        <h1 className="text-red-700 text-9xl ">Heniflix</h1>
      </div>
      <div className=" flex flex-1 h-full w-full">
        <div className="flex justify-center items-center">
          <Container maxWidth="sm">
            <Typography variant="h1" align="center" gutterBottom>
              Login
            </Typography>
            <form>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                required={true}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Link href="/">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Link>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
// components/LoginForm.js
