import React from "react";
import { Row } from "react-bootstrap";

const Input1 = ({ input }) => {
  return (
    <div>
      {/*  PRINCIPAL INPUT */}
      <input
        type="radio"
        name="input__name"
        className="filtrar__subInput-radio"
      />
      <Row className="subInput">
        <span className="subInput__custom input__custom"></span>
        <label className="input__title">
          {input.stitle1}
        </label>
      </Row>
    {/*  SUB INPUTS */}
      <input
        type="radio"
        name="input__name"
        className="filtrar__subInput-radio"
      />
      <Row className="subInput">
        <span className="subInput__custom input__custom"></span>
        <label className="input__title">
          {input.stitle2}
        </label>
      </Row>

      <input
        type="radio"
        name="input__name"
        className="filtrar__subInput-radio"
      />
      <Row className="subInput">
        <span className="subInput__custom input__custom"></span>
        <label className="input__title">{input.stitle3}</label>
      </Row>

      <input
        type="radio"
        name="input__name"
        className="filtrar__subInput-radio"
      />
      <Row className="subInput">
        <span className="subInput__custom input__custom"></span>
        <h3 className="input__title">{input.stitle4}</h3>
      </Row>
      <input
        type="radio"
        name="input__name"
        className="filtrar__principalInput-radio"
      />
      <Row className="principalInput">
        <span className="principalInput__custom input__custom"></span>
        <h3 className="input__title">{input.title}</h3>
      </Row>
    </div>
  );
};

export default Input1;
