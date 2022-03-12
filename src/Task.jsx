import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 2px solid red;
  border-radius: 5px;
  padding: 8px;
  background-color: ${(props) => (props.isDragging ? 'cyan' : 'white')};

  display: flex;
`;

const DragHandle = styled.div`
  width: 20px;
  height: 20px;
  background-color: pink;
  border-radius: 5px;
  margin-right: 8px;
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <DragHandle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
