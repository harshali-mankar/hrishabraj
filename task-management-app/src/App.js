import "./App.css";

import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import Task from "./components/Task";

function App() {
  return (
    <>
      <Container fluid="md">
        <div className="pt-4 task-management-app">
          <fieldset className="border rounded-3 p-3">
            <legend className="float-none w-auto px-3">
              <h1 className="text-primary text-center">Task Management App</h1>
            </legend>

            <Task />
          </fieldset>
        </div>
      </Container>
    </>
  );
}

export default App;
