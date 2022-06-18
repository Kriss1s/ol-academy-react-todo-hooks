import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NewToDo from './components/NewToDo.jsx';
import AddToDoList from './components/AddToDoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [isClickOnPlus, setIsClickOnPlus] = useState(false);
  const [isClickOnDelete, setIsClickOnDelete] = useState(false);
  const [toDelete, setToDelete] = useState([]);

  const addToDoForm = () => setIsClickOnPlus(true);

  const saveNewToDo = newTodos => {
    setTodos([...newTodos]);
    setIsClickOnPlus(false);
  };

  const deleteOne = id => {
    const newTodos = todos.filter(e => e.id !== id);
    setTodos([...newTodos]);
  };

  const doneToggle = id => {
    const newTodos = [...todos];
    newTodos.forEach(e => {
      if (e.id === id) {
        e.isDone = !e.isDone;
        setTodos([...newTodos]);
      }
    });
  };

  const deleteDone = () => {
    const newTodos = todos.filter(e => e.isDone !== true);
    setTodos([...newTodos]);
  };

  const deleteAll = () => setTodos([]);

  const chooseItem = () => setIsClickOnDelete(!isClickOnDelete);

  const updateToDo = (id, newInfo) => {
    let newIndex;
    todos.forEach((elem, index) => {
      if (elem.id === id) {
        newIndex = index;
      }
    });
    const newTodo = [...todos];
    newTodo.splice(newIndex, 1, newInfo);
    setTodos([...newTodo]);
  };

  const addToDeleteArray = id => {
    const newToDelete = [...toDelete];
    if (newToDelete.every(e => e !== id)) {
      newToDelete.push(id);
    } else {
      const toCut = newToDelete.indexOf(id);
      newToDelete.splice(toCut, 1);
    }
    setToDelete([...newToDelete]);
  };

  const deleteSome = () => {
    chooseItem();
    const newTodo = todos;
    toDelete.forEach(eDelete => {
      newTodo.map((e, index) => {
        if (e.id === eDelete) {
          newTodo.splice(index, 1);
        }
      });
    });
    setTodos([...newTodo]);
  };

  const upOrDown = (id, type) => {
    const newTodos = [...todos];
    console.log(newTodos);
    todos.forEach((e, index) => {
      let check;
      let newIndex;
      if (type === 'up') {
        check = index !== 0;
      } else if (type === 'down') {
        check = index !== newTodos.length - 1;
      }
      if (check && e.id === id) {
        const newOne = newTodos.splice(index, 1);
        newIndex = type === 'up' ? index - 1 : index - 1 + 2;
        console.log(newIndex);
        newTodos.splice(newIndex, 0, newOne[0]);
        return;
      }
    });
    return setTodos([...newTodos]);
  };

  return (
    <section className='dark-mode main-container'>
      <div className='left-side'>
        <h2>Add new task</h2>
        <div className='add-todo-block glass'>
          {isClickOnPlus ? (
            <NewToDo saveNewToDo={saveNewToDo} todos={todos} />
          ) : (
            <div className='plus-wrapper' onClick={addToDoForm}>
              <FaPlus className='icon' />
            </div>
          )}
        </div>
      </div>
      <div className='right-side'>
        <ul className='add-list'>
          <h2>Tasks</h2>
          <div className='delete-buttons'>
            <button className='btn delete-btn glass' onClick={deleteAll}>
              Delete All
            </button>
            <button className='btn delete-btn glass' onClick={deleteDone}>
              Delete Done
            </button>
            {isClickOnDelete === false ? (
              <button className='btn delete-btn glass' onClick={chooseItem}>
                Delete some
              </button>
            ) : (
              <button className='btn delete-btn glass' onClick={deleteSome}>
                Delete
              </button>
            )}
          </div>
          {todos.map(elem => (
            <div key={elem.id} className='li-div'>
              {isClickOnDelete && (
                <input
                  type='checkbox'
                  className='checkbox'
                  onChange={() => addToDeleteArray(elem.id)}
                />
              )}
              <AddToDoList
                // key={elem.id}
                {...elem}
                saveNewToDo={saveNewToDo}
                deleteOne={deleteOne}
                updateToDo={updateToDo}
                upOrDown={upOrDown}
                doneToggle={doneToggle}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
