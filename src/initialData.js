const initalData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Set up cake and candles' },
    'task-2': { id: 'task-2', content: 'Put gasoline in motorbike' },
    'task-3': { id: 'task-3', content: 'Master ReactJS' },
    'task-4': { id: 'task-4', content: "Master all Ronaldo's soccer skills" },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Not Started',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },

  // to reorder columns
  columnOrder: ['column-1'],
};

export default initalData;
