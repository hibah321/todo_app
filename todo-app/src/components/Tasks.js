import Task from './Task'

const Tasks = ({taskss , onDelete, onCheck, state}) => {
    if (state === null){
    return (
        <div className="tasks" >
                {taskss.map((task) => 
                    <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} onCheck= {onCheck} />
                )}
        </div>
    )} else if(state === false){
        <div className="tasks" >
                {taskss.map((task) => {if (task.state === false) {
                    <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} onCheck= {onCheck} />
                }})}
        </div>
    }
}
export default Tasks
