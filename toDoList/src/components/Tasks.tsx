import { Empty } from './Empty';
import { Info } from './Info';
import { Task } from './Task'; /* tasklist */
import style from './Tasks.module.css';

interface Task {
    id: string;
    message: string;
    done: boolean;
}

interface TasksProps {
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    taskList: Task[];
}

export function Tasks({ onCompleteTask, onDeleteTask, taskList }: TasksProps) {
    let counter = taskList.length;
    let sumOfDone = 0;
    for (const task of taskList)
        sumOfDone += task.done === true ? 1 : 0;

    return (
        <article className={style.container}>
            <Info totalOfTasks={counter} completed={sumOfDone} />
            {counter === 0 
                ? <Empty /> 
                : <>{taskList.map( (eachItem: Task) => {
                    return <Task taskInfo={eachItem} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
                })}</>
            }
        </article>
    )
}