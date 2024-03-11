import {Todo} from '@/types'

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void; // 删除todo
    toggleTodo: (id: number) => void; // 切换todo
}

export default function TodoItem({todo,deleteTodo,toggleTodo}: TodoItemProps) {
    return (
        <>
            <li>
                {/* 已处理划线 */}
                <span style={{textDecoration: todo.completed? 'line-through solid 5px #555':'none'}}>{todo.content}</span>
                <button onClick={()=>toggleTodo(todo.id)}>切换</button>
                <button onClick={()=>deleteTodo(todo.id)}>删除</button>
            </li>
        </>
    )
}