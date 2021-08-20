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
  const clear = () => {
    console.log('f')
    setTaskss(taskss.filter((task) => task.status === false));
  }
  const[state, setState] = useState('all')

  return (
  <div className="container">
    <h1>To Do</h1>
    <Input addtask={addtask} />
    <table className="main">
      <Tasks taskss={ taskss } onDelete ={OnDelete} onCheck= {onCheck} state = {state}/>  
      <tr className="footer">
          <td>
            <p>{taskss.length} items left</p>
          </td>
          <td>
            <div>
              <button onClick = {() => setState('all')}>All</button>
              <button onClick = {() => setState('active')} >Active</button>
              <button onClick= {() => setState('completed')}>Completed</button>
            </div>
          </td>
          <td><button onClick = {clear}>Clear Completed</button></td>
      </tr>
    </table>
  </div>
  );
  
}

export default App;
