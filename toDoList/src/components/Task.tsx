import style from './Task.module.css'; 
import circleEmpty from '../assets/circle-empty.svg';
import circleChecked from '../assets/circle-checked.svg';
import trash from '../assets/trash.svg';

interface Task {
    id: string;
    message: string;
    done: boolean;
}

interface TaskProps {
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    taskInfo: Task;
}

export function Task({ taskInfo, onDeleteTask, onCompleteTask }: TaskProps) {
    const handleDelete = () => { onDeleteTask(taskInfo.id)};

    const handleDone = () => { onCompleteTask(taskInfo.id)};

    return (
        <div className={style.container} key={taskInfo.id}>
            <button onClick={handleDone} className={style.left} title="Marcar tarefa como concluida">
                <img src={taskInfo.done == true ? circleChecked : circleEmpty}  />
            </button>
            <p className={taskInfo.done == true ? style.messageOverline : style.message}>{taskInfo.message}</p>
            <button onClick={handleDelete} className={style.right} title="Apagar tarefa">
                <img src={trash} />
            </button>
            
        </div>
    )
}