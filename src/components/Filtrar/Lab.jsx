import React, {useState} from "react";
import { Row, Container } from "react-bootstrap";

const Input1 = ({ input1 }) => {
  // $(function () {
  //     $(".input-check").click(function () {
  //       $(".h3-input-title").toggleClass("checked-color-h3");
  //     });
  //   });
  // const subInput01 = {

  // }
 
  // InputTogle = {
  //   active: false
  // }
  const [InputTogle, setInputTogle] = useState ({
    activeObject: null,
    objects: [{id: 1 }, {id: 2 }, {id: 3 }, {id: 4 }]
  });
  function ToggleA(inputTitle){
      setInputTogle({...InputTogle, activeObject: InputTogle.objects[inputTitle]})
  }
  
  function ToggleAStyles(inputTitle){
    if(InputTogle.objects[inputTitle] === InputTogle.activeObject){
      return "box active"
    }else {
      return "box-inactive"
    }
  }


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
        {InputTogle.objects.map((elements, inputTitle) => (
          <div className={ToggleAStyles} key={inputTitle}>
          <input type="checkbox" className="input-check" onInput={() => {ToggleA(inputTitle)}}/>
        <span className="custom-radio-checkbox w-h22"></span>
        <h3  className="h3-input-title checked-color-h3">{input1.title}</h3>
          </div>
        ))}

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
