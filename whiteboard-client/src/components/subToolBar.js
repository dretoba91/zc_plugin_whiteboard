import React from "react";
import styled from "styled-components";

const SubToolBarWrapper = styled.div`
  max-width: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border-radius: 9px;
`;

const Tool = styled.button`
  background: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  margin: 5px;
  border: 1px solid #c4c4c4;
  color: #999999;
  display: ${(props) => (props.position === "second" ? "flex" : "block")};
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all linear;
  &:hover {
    background: #999;
    color: #fff;
    border: none;
  }
`;

const Icon = styled.i``;

const Circle = styled.div`
  background: #ffa740;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

const subToolBar = () => {
  return (
    <SubToolBarWrapper>
      <Tool position="first">
        <Icon className="fas fa-thumbtack" />
      </Tool>
      <Tool position="second">
        <Circle /> <Icon className="fas fa-angle-down" />
      </Tool>
      <Tool position="third">
        <Icon className="fas fa-font" />
      </Tool>
      <Tool position="fouth">
        <Icon className="fas fa-shapes" />
      </Tool>
      <Tool position="fifth">
        <Icon className="fas fa-trash-alt" />
      </Tool>
      <Tool position="sixth">
        <Icon className="fas fa-link" />
      </Tool>
      <Tool position="last">
        <Icon className="fas fa-ellipsis-v" />
      </Tool>
    </SubToolBarWrapper>
  );
};
export default subToolBar;
