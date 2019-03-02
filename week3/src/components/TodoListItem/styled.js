import styled from "styled-components";

const TodoItemWrapper = styled.div`
  padding: 20px 20px;
  border: 1px solid #c8c8c8;
  background-color: #fcfcfc;
  display: flex;
`;

const TodoItemMessage = styled.span`
  display: flex;
  flex: 1;
  align-self: center;
`;

const TodoItemActionWrapper = styled.div``;

export { TodoItemWrapper, TodoItemMessage, TodoItemActionWrapper };
