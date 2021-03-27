import './TodoApp.css';
import TodoList from './components/TodoList';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';

function App() {

  document.title = "To-Do App | Cian Healthcare Ltd"
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { enqueueSnackbar} = useSnackbar();

  const action = key => (
      <React.Fragment>
          <div onClick={() => { window.location.href = "http://cian-healthcare.github.io/" }} style={{background:"transparent", border:"none", cursor:"pointer", color:"red" }}>
              Check Out
          </div>
      </React.Fragment>
  );
    
  useEffect(() => {
      enqueueSnackbar("Check out new posts from Cian .", {
          variant: 'info',
          autoHideDuration: 5000,
          action,
      });
  }, [])

  return (
    <>
    <div className="main-outer-todo-div">
      <h1>To-Do App</h1>
      <TodoList />
    </div>
    </>
  );
}

export default App;
