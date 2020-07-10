import React from "react";
import { Row, Container } from "react-bootstrap";

const Input1 = ({ input1 }) => {
  // $(function () {
  //     $(".input-check").click(function () {
  //       $(".h3-input-title").toggleClass("checked-color-h3");
  //     });
  //   });
  // const subInput01 = {

  // }

  function SubInput({ iinput }) {
    return (
      <>
        <input type="checkbox" className="input-check" />
        <span className="custom-radio-checkbox w-h15"></span>
      </>
    );
  }
  return (
    <>
      <Row className="input-a">
        <input type="checkbox" className="input-check" />
        <span className="custom-radio-checkbox w-h22"></span>
        <h3 className="h3-input-title checked-color-h3">{input1.title}</h3>
      </Row>
      <Container className="subsInput-Container">
        <Row className="sub-input">
          <SubInput />
          <h3 className="h3-input-title checked-color-h3">{input1.stitle1}</h3>
        </Row>
        <Row className="sub-input">
          <SubInput />
          <h3 className="h3-input-title checked-color-h3">{input1.stitle2}</h3>
        </Row>
        <Row className="sub-input">
          <SubInput />
          <h3 className="h3-input-title checked-color-h3">{input1.stitle3}</h3>
        </Row>
        <Row className="sub-input">
          <SubInput />
          <h3 className="h3-input-title checked-color-h3">{input1.stitle4}</h3>
        </Row>
      </Container>
    </>
  );
};

export default Input1;
