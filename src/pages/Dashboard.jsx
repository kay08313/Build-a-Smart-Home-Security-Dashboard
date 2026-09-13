import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import storageLogo from "../assets/storagelogo.PNG";

import products from "../data/householditem.json";

import Itemcard from "../components/itemcard";

export default function Dashboard() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function Logout() {
    authContext.setToken(null);
    navigate("/");
    console.log("logout");
  }

  return (
    <Container>
      <div className="storage">
        <img className="logoimg" src={storageLogo} alt="storagelogo" />
        <h1 className="my-3">My Storage System Dashboard</h1>
        <Button variant="primary" onClick={Logout}>
          Logout
        </Button>
      </div>

      <div className="showcard">
        <Row>
          {products.map((item) => (
            <Col key={item.id} md={4} sm={6} xs={12}>
              <Itemcard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
