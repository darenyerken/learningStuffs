import TodoItem from "./TodoItem"
import {Todo} from '@/types'
interface TodoListProps { // 定义一个props接口
    todos:Todo[],
    toggleTodo: (id:number) => void,
    deleteTodo: (id:number) => void
}

export default function TodoList({todos,toggleTodo,deleteTodo}:TodoListProps) {


    
    // 渲染todo列表
    const todoList = todos.map(todo => 
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)

    return (
        <>
            <ul>
                {todoList}
            </ul>
        </>
    )
}