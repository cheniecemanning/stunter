import React, { useContext } from "react";
import StunterStateContext from "../../context/StunterStateContext";
import { Card, CardTitle, CardSkills } from "./styles";
import { Container, Row, Col } from "reactstrap";

const SavedStunters = () => {
  const state = useContext(StunterStateContext);
  const { savedStunters } = state;

  const show = savedStunters.map((stunter) => (
    <Row className="mt-3" key={stunter.lastName}>
      <Col>
        <Card
          className="stunterCard"
          key={stunter.firstName}
          id={stunter.id}
          background={`${stunter.img}`}
          draggable="true"
        ></Card>
      </Col>
      <Col>
        <CardTitle> {stunter.firstName}</CardTitle>
        <CardSkills><p>{stunter.skills.join(' - ')}</p></CardSkills>
      </Col>
    </Row>
  ));
  return <Container>{show}</Container>;
};

export default SavedStunters;
