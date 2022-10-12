import style from './Empty.module.css'
import clipboard from '../assets/clipboard.svg'

export function Empty() {
    return (
        <div className={style.empty}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
