import Task from './Task'

const Tasks = ({taskss , onDelete}) => {
    return (
        <div className="task-container" >
            {taskss.map((task) => (
                <Task key={task.id} task= {task} id={task.id} onDelete={onDelete} /> 
            ))}
        </div>
    )
}
export default Tasks
