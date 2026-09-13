import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function backtologin() {
    navigate("/");
  }

  return (
    <Container>
      <h1>ErrorPage</h1>
      <button onClick={backtologin}>back to login page</button>
    </Container>
  );
}

export default ErrorPage;
