import React, { useState } from 'react';
import initialData from './initialData';
import Column from './Column';

const App = () => {
  const [initState, setInitState] = useState(initialData);
  return initState.columnOrder.map((colId) => {
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
  });
};

export default App;
