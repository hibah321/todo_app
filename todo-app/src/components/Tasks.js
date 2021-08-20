import Task from './Task'

const Tasks = ({taskss , onDelete, onCheck, state}) => {
    if (state === 'all'){
    return (
        <div className="tasks" >
                {taskss.map((task) => 
                    <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} onCheck= {onCheck} />
                )}
        </div>
    )
    } else if(state === "active"){
        return(
        <div className="tasks" >
                {taskss.map((task) =>  { return task.status === false ? 
                    <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} onCheck= {onCheck} /> :''
                })}
        </div>
        )}
    else if(state === "completed"){
        return(
        <div className="tasks" >
                {taskss.map((task) =>  { return task.status ? 
                    <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} onCheck= {onCheck} /> :''
                })}
        </div>
        )}
}

export default Tasks
