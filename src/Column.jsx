import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 2px solid red;
  border-radius: 5px;
`;
const ColumnTitle = styled.h2`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <ColumnTitle>{column.title}</ColumnTitle>
      <TaskList>
        {tasks.map((taskItem) => (
          <Task key={taskItem.id} task={taskItem} />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
