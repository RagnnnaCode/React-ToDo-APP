import React, {useContext} from 'react'
import TodoItem from './TodoItem'
import style from "./Todo.module.css"
import Context from '../context'
import AddTodo from './AddTodo'
import Loader from '../Loader'


const TodoList = (props) => {
   
    const {Todos, loading} = useContext(Context);
    
    let todosAM = props.todo.map((td, i) => {
        return <TodoItem completed={td.completed} OnToggle={props.OnToggle} title={td.title} key={td.id} id={td.id} i={i}/>
    })
    return (
        <div className={style.List} >
            
           <ul>
              
          {
          Todos.length || loading ? 
          <h1 className={style.TDtrue}>ToDo List</h1> 
          : 
          <h1 className={style.TDfalse}>You have no ToDo's ;)</h1>
          }
          <div><AddTodo onCreate={props.addTodo}/></div>
          { loading ? <Loader/>
              : todosAM  }
           </ul>
        </div>
    )
}
export default TodoList;