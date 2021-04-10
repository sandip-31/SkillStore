import React from "react";
import Card from 'react-bootstrap/Card'
import Accordion from "react-bootstrap/Accordion";
import './Test.css'

function Test() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} className="accordian" eventKey="0">
          Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                
            </Card.Body>
          </Accordion.Collapse>
        </Card>
         
      </Accordion>
    </div>
  );
}

export default Test;
