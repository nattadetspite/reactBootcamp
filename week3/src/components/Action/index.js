import React from "react";
import { ButtonWrapper, EditButton, RemoveButton } from "./styled";
class Action extends React.Component {
  render() {
    const { onEdit, onRemove, editable = true, removeable = true } = this.props;
    return (
      <ButtonWrapper>
        {editable && <EditButton onClick={onEdit} />}
        {removeable && <RemoveButton onClick={onRemove} />}
      </ButtonWrapper>
    );
  }
}

export default Action;
