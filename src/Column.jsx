import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

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
  transition: background-color 0.4s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'purple' : 'white')};
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <ColumnTitle>{column.title}</ColumnTitle>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((taskItem, taskIndex) => (
              <Task key={taskItem.id} task={taskItem} index={taskIndex} />
            ))}

            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
