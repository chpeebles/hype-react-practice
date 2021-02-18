import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header bg_color">
        <h1>Hype yourself up!</h1>
        <Form>
          <Row>
            <Col xs={8} lg={8}>
              <form>
                <Form.Control size="lg" type="text" placeholder="Adjective" />
                <Form.Text id="label">Input an adjective that positively describes you.</Form.Text>
              </form>
            </Col>
            <span><Button size="lg">Submit</Button></span>
          </Row>
        </Form>
      </header>
      {/*<h1 className="bg_color">Hell yeah! You're awesome!</h1>*/}

      <p id="footer">Made with &#9825; by Christina Peebles</p>
    </div>
  );
};

