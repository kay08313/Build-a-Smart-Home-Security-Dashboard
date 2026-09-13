import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import loginLogo from "../assets/loginlogo.PNG";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = username === "random@email";
    const isCorrectPassword = password === "password";
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("1234");
      console.log("login success");
      navigate("/dashboard");
    }
  }

  return (
    <Container className="loginpage">
      <div className="tiltebg">
        <img src={loginLogo} alt="" />
      </div>

      <h1 className="my-3">Login to your account</h1>

      <div className="loginform">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">random@email</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">password</Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}
