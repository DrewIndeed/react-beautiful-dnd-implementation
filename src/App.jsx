import React, { useState } from 'react';
import initialData from './initialData';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [initState, setInitState] = useState(initialData);

  const onDragEnd = (result) => {
    // destructure result object
    const { draggableId, source, destination } = result;

    // check if destination is null (user drop it outside a column or so, ...)
    if (!destination) return;

    // check if user drops at the same point
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // retrieve the working-on column from the state
    const workingOnColumn = initState.columns[source.droppableId];

    // retrieve the working-on task ids array of the above column from the state
    const newTaskIdsContainer = [...workingOnColumn.taskIds];

    // remove one item to start reordering
    newTaskIdsContainer.splice(source.index, 1);

    // insert at the new position
    newTaskIdsContainer.splice(destination.index, 0, draggableId);

    // create new column
    const newColumn = {
      ...workingOnColumn,
      taskIds: newTaskIdsContainer,
    };

    // create a new state object before updating the state
    const newState = {
      ...initState,
      columns: {
        ...initState.columns,
        [newColumn.id]: newColumn,
      },
    };

    // using setState to update the state
    setInitState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initState.columnOrder.map((colId) => {
        // use id of column to ensure the columns order
        const columnObjectOfCurrentId = initState.columns[colId];

        // use id of task of above column to ensure the tasks order
        const tasksListOfCurrentIdColumn = columnObjectOfCurrentId.taskIds.map(
          (taskId) => initState.tasks[taskId]
        );

        return (
          <Column
            key={columnObjectOfCurrentId.id}
            column={columnObjectOfCurrentId}
            tasks={tasksListOfCurrentIdColumn}
          />
        );
      })}
    </DragDropContext>
  );
};

export default App;
