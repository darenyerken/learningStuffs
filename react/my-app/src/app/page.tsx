'use client'
// 引入组件
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'
import TodoFilter from '@/components/TodoFilter'
import './page.css'
// 类型
import {Todo} from '@/types'
// hooks
import {useState} from 'react'


export default function Home() {
  // todo列表
  const [todos,setTodos] = useState<Todo[]>([])
  // 列表显示状态: 全部/已处理/待办
  const [listShow,setListShow] = useState<'all'|'completed'|'uncompleted'>('all')

  // 添加todo
  function addTodo(content:string):void {
    const todo:Todo = {
      id:Date.now(),
      content,
      completed:false
    } 
    setTodos([...todos,todo])
  }

  // 切换已处理/待办
  function toggleTodo(id:number):void {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {...todo,completed:!todo.completed} // 切换completed的状态 true/false
      } else return todo
    }))
    console.log(todos);
    
  }
  // 删除
  function deleteTodo(id:number):void {
    setTodos(todos.filter(todo => todo.id !== id)) // 直接筛选
  }

  // 筛选todos
  const filteredTodos =todos.filter(todo => {
    switch(listShow) {
      case 'all': return todo;
        break;
      case 'completed': return todo.completed;
        break
      case 'uncompleted': return !todo.completed;
    }
  })

  return (
    <>
    <div className='outer'>
      <h1>TodoList !!!</h1>
      {/* 添加 */}
      <AddTodo addTodo={addTodo}/>
      {/* 列表 */}
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      {/* 筛选 */}
      <TodoFilter setListShow={setListShow}/>
    </div>
    </>
  )
}