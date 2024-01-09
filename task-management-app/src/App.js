import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container fluid="md">
      <h1 class="text-success text-center">GeeksforGeeks</h1>

      <div className="d-flex ml-auto top-management-app">
        {/* <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row> */}
        <Row>
          <Col className="top-management-app__head">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary">Primary</Button>{" "}
          </Col>
        </Row>
        <div className="top-management-app__body"></div>
      </div>
    </Container>
  );
}

export default App;
