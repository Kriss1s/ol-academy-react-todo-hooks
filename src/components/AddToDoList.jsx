import React, { useState } from 'react';
import {
  FaCheck,
  FaMinus,
  FaPencilAlt,
  FaSortUp,
  FaSortDown,
} from 'react-icons/fa';
import CorrectToDo from './CorrectTodo';

const importanceClassName = {
  high: 'high-imp',
  medium: 'medium-imp',
  low: 'low-imp',
};

function AddToDoList(props) {
  const [isFinished, setIsFinished] = useState(true);
  const updateIsFinished = () => setIsFinished(!isFinished);

  return (
    <li key={props.id} className={`glass one-item  `}>
      <span
        className={`${importanceClassName[props.importance] || ''} span`}
      ></span>
      {isFinished ? (
        <>
          <div className='info'>
            <h3>{props.taskName.toUpperCase()}</h3>
            <p>{props.description}</p>
            {props.isDone && <p className='done'>Done!</p>}
          </div>
        </>
      ) : (
        <CorrectToDo
          id={props.id}
          taskName={props.taskName}
          description={props.description}
          importance={props.importance}
          isDone={props.isDone}
          updateIsFinished={updateIsFinished}
          updateInfo={e => props.updateToDo(props.id, e)}
        />
      )}
      <div className='buttons'>
        <button
          className='btn btn-item'
          onClick={() => props.doneToggle(props.id)}
        >
          <FaCheck />
        </button>
        <button
          className='btn btn-item'
          onClick={() => props.deleteOne(props.id)}
        >
          <FaMinus />
        </button>
        <button
          className='btn btn-item'
          onClick={() => setIsFinished(!isFinished)}
        >
          <FaPencilAlt />
        </button>
        <button
          className='btn btn-item'
          onClick={() => props.upOrDown(props.id, 'up')}
        >
          <FaSortUp />
        </button>
        <button
          className='btn btn-item'
          onClick={() => props.upOrDown(props.id, 'down')}
        >
          <FaSortDown />
        </button>
      </div>
    </li>
  );
}

export default AddToDoList;
