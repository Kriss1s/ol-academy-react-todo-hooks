import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
function NewToDo({ todos, saveNewToDo }) {
  const [todo, setTodo] = useState({
    id: '',
    taskName: '',
    description: '',
    importance: '',
    isDone: false,
  });
  const generateNewId = () => {
    const indexesArray = [];
    todos.forEach(element => {
      indexesArray.push(element.id);
    });

    return todos.length === 0 ? 0 : Math.max(...indexesArray) + 1;
  };

  const checknewItem = name => {
    return todos.every(e => e.taskName !== name);
  };

  const addNewItem = () => {
    const newTodos = [...todos];

    const checkedName = checknewItem(todo.taskName);

    if (checkedName && todo.taskName !== '') {
      newTodos.push(todo);
      saveNewToDo(newTodos);
      setTodo({
        id: '',
        taskName: '',
        description: '',
        importance: '',
        isDone: false,
      });
    }
  };

  return (
    <div className='div'>
      <input
        className='task-name'
        type='text'
        placeholder='Task Name'
        value={todo.taskName}
        onChange={e => {
          const newId = generateNewId();
          setTodo({ ...todo, id: newId, taskName: e.target.value });
        }}
      />

      <textarea
        className='textArea'
        placeholder='Task Description'
        value={todo.description}
        onChange={e => setTodo({ ...todo, description: e.target.value })}
      ></textarea>

      <div className='radio-block'>
        <p className='radio-text'>level of importance</p>
        <div className='radio-btns-block'>
          <label htmlFor='high'>
            <span className='high-imp'></span>
            <input
              type='radio'
              name='importance'
              className='high'
              id='high'
              value='high'
              onChange={e => setTodo({ ...todo, importance: e.target.value })}
            />
            High
            <p>
              <FaCheck />
            </p>
          </label>
          <label htmlFor='medium'>
            <span className='medium-imp'></span>
            <input
              type='radio'
              className='medium'
              name='importance'
              id='medium'
              value='medium'
              onChange={e => setTodo({ ...todo, importance: e.target.value })}
            />
            Medium
            <p>
              <FaCheck />
            </p>
          </label>
          <label htmlFor='low'>
            <span className='low-imp'></span>
            <input
              type='radio'
              name='importance'
              className='low'
              id='low'
              value='low'
              onChange={e => setTodo({ ...todo, importance: e.target.value })}
            />
            Low
            <p>
              <FaCheck />
            </p>
          </label>
        </div>
      </div>
      <button className='btn save-btn' onClick={addNewItem}>
        Save
      </button>
    </div>
  );
}

export default NewToDo;
