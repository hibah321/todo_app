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
      status: false,
    }])


  const OnDelete = (id) =>{
    setTaskss(taskss.filter((task) => task.id!== id))
  }

  const addtask = (task) =>{
    const id = Math.floor(Math.random()*10000)+1;
    const newtask = {id, ...task};
    setTaskss([...taskss,newtask])
  }
  const onCheck = (id) => {
    setTaskss(
      taskss.map((task) => 
      task.id===id ? {...task, status: !task.status} : task)
    )
  }
  const[state, setState] = useState()

  return (
  <div className="container">
    <h1>To Do</h1>
    <Input addtask={addtask} />
    <table className="main">
      <Tasks taskss={ taskss } onDelete ={OnDelete} onCheck= {onCheck} state = {state}/>  
      <tr className="footer">
          <td>
            <p><span id="items-left"></span> items left</p>
          </td>
          <td>
            <div>
              <button onClick = {() => setState(null)}>All</button>
              <button onClick = {() => setState(false)} >Active</button>
              <button onChange = {() => setState(true)}>Completed</button>
            </div>
          </td>
          <td><button>Clear Completed</button></td>
      </tr>
    </table>
  </div>
  );
  
}

export default App;
