import React, { useState } from 'react';
import Form from './form';
import Todo from './todo';

function TodoList() {
  const [tasks, settasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newtasks = [task, ...tasks];
    settasks(newtasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    settasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  const removeTask = id => {
    const removedArr = [...tasks].filter(task => task.id !== id);

    settasks(removedArr);
  };

  const completeTask = id => {
    let updatedtasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    settasks(updatedtasks);
  };

  return (
    <>
      <h1>Gerencie seu Tempo!</h1>
      <Form onSubmit={addTask} />
      <Todo
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default TodoList;