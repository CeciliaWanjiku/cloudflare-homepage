import React from "react";
import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  grid-column: 1 / 5
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 520px;
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 0px;
`;

export const CardHeading = styled.h1`
  font-size: 44px;
  font-weight: bold;
  text-align: left;
  padding-left:20px;
  padding-bottom: 0px;
  line-height: 1.2em;
`;
export const SecondCardHeading = styled.h3`
line-height: 1.25;
margin-left: 30px;

`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
export const CardImage = styled.img``;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 30px;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 30%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  margin-top: 30px
  font-weight: 700;
  color: #fff;
  background-color: #0055dc;
  border: 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

