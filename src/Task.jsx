import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: 2px solid red;
  border-radius: 5px;
  padding: 8px;
`;

const Task = ({ task }) => {
  return <Container>{task.content}</Container>;
};

export default Task;
