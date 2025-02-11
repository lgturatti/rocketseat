import style from './Info.module.css'

interface InfoProps {
    completed: number;
    totalOfTasks: number;
}

export function Info({completed, totalOfTasks}: InfoProps) {
    return (
        <div className={style.info}>
            <section className={style.left}>Tarefas criadas
                <div className={style.counter}>{totalOfTasks}</div>
            </section>
            <section className={style.right}>Concluídas
                <div className={style.counter}>{completed} de {totalOfTasks}</div>
            </section>
        </div>
    )
}