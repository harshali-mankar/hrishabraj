import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import ModalBox from "./ModalBox";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid="md">
      <div className="p-5 task-management-app">
        {/* <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row> */}
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">
            <h1 class="text-primary text-center">Task Management App</h1>
          </legend>
          <div className="d-flex pb-lg-5 justify-content-between top-management-app__head">
            <Dropdown>
              <Dropdown.Toggle className="bg-primary" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <ModalBox />
          </div>
          <div className="task-management__body">
            <div className="task-management__listWrp">
              <div className="task-management__list d-flex task-management__list--Head fw-bold">
                <div className="task-management__title">Title</div>
                <div className="task-management__desc">Description</div>
                <div className="task-management__actionBtns"> - </div>
              </div>
              <div className="task-management__list d-flex">
                <div className="task-management__title">My Task</div>
                <div className="task-management__desc">
                  My task 1 line Description
                </div>
                <div className="task-management__actionBtns ms-auto fs-4">
                  {/* https://fontawesome.com/icons/trash?f=classic&s=solid */}
                  <FontAwesomeIcon icon={faEdit} className="p-1" />

                  <FontAwesomeIcon icon={faTrash} className="p-1 text-danger" />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </Container>
  );
}

export default App;
