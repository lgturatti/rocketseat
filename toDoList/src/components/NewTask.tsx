import styles from  "./NewTask.module.css"
import plusIcon from "../assets/plus.svg"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface NewTaskProps {
    onAddNewTask: (message: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
    const [task, setTask] = useState<string>('');

    function handleNewTask(event: FormEvent) {
        event?.preventDefault();
        onAddNewTask(task);
        setTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTask(event?.target?.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('É necessário informar o texto de uma tarefa para criá-la');
    }

    return (
        <form onSubmit={handleNewTask} className={styles.form}>
            <input
                type="text"
                name="task"
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                placeholder="Adicione uma nova tarefa"
                value={task}
            />
            <button title="Criar nova tarefa" type="submit" disabled={task.length === 0}>
                <strong>Criar</strong>
                <img src={plusIcon} />
            </button>
        </form>
        
    )
}
