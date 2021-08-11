import { useState } from 'react';
import Input from './components/Input';
import Tasks from './components/Tasks';

import './App.css';

function App() {
  const [taskss, setTaskss] = useState([{
      id: 1,
      text: 'yolo',
      status: false,
    },
    {
      id: 2,
      text: 'work do',
      status: true,
    }])


  const OnDelete = (id) =>{
    console.log(id);
    setTaskss(taskss.filter((task) => task.id!== id))
  }

  const addtask = (task) =>{
    console.log(task);
    const id = Math.floor(Math.random()*10000)+1;
    const newtask = {id, ...task};
    setTaskss([...taskss,newtask])
  }

  return (
  <div className="container">
    <h1>To Do</h1>
    <Input addtask={addtask} />
    <Tasks taskss={ taskss } onDelete ={OnDelete} />  
    <div className="footer">
      <p><span id="items-left"></span> items left</p>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
    </div>
  </div>
  );
  
}

export default App;
