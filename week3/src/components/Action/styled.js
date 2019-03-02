import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = props => <EditIcon icon={faEdit} {...props} />;

const RemoveButton = props => <RemoveIcon icon={faEraser} {...props} />;

const EditIcon = styled(FontAwesomeIcon)`
  margin: 10px;
  font-size: 1.2em;
  cursor: pointer;
`;

const RemoveIcon = styled(EditIcon)``;

export { ButtonWrapper, EditButton, RemoveButton };
