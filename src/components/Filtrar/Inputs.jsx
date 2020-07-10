import React from "react";
import { Row, Container } from "react-bootstrap";

const Input1 = ({ input }) => {
  // $(function () {
  //     $(".input-check").click(function () {
  //       $(".h3-input-title").toggleClass("checked-color-h3");
  //     });
  //   });
  // const subInput01 = {

  // }
  function SubInput() {
    return (
      <>
        <input type="checkbox" className="filtrar__input-checkbox" />
        <span className="input__custom"></span>
      </>
    );
  }
  return (
    <>
      <Container className="filtrar__principalInput">
        <Row className="principalInput">
          <input type="checkbox" className="filtrar__input-checkbox" />
          <span className="input__custom"></span>
          <h3 className="input__title checked-color-h3">{input.title}</h3>
        </Row>
      </Container>

      <Container className="filtrar__subInputs">
        <Row className="subInput">
          <SubInput />
          <h3 className="input__title checked-color-h3">{input.stitle1}</h3>
        </Row>
        <Row className="subInput">
          <SubInput />
          <h3 className="input__title checked-color-h3">{input.stitle2}</h3>
        </Row>
        <Row className="subInput">
          <SubInput />
          <h3 className="input__title checked-color-h3">{input.stitle3}</h3>
        </Row>
        <Row className="subInput">
          <SubInput />
          <h3 className="input__title checked-color-h3">{input.stitle4}</h3>
        </Row>
      </Container>
    </>
  );
};

export default Input1;
