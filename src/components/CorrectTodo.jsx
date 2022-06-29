import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function CorrectTodo({
  id,
  taskName,
  description,
  importance,
  isDone,
  updateInfo,
  updateIsFinished,
}) {
  const [todo, setTodo] = useState({
    id,
    taskName,
    description,
    importance,
    isDone,
  });

  const saveCorrectTodo = () => {
    updateInfo(todo);
    updateIsFinished();
  };

  return (
    <div className='div'>
      <input
        className='task-name'
        type='text'
        placeholder='Task Name'
        value={todo.taskName}
        onChange={e => {
          setTodo({ ...todo, taskName: e.target.value });
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
      <button className='btn save-btn' onClick={saveCorrectTodo}>
        Save
      </button>
    </div>
  );
}
