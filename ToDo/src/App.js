import React, {useEffect} from 'react';
import style from "./App.module.css"
import TodoList from './TodoList/TodoList';
import Context from './context'


const App = () => {

  

  let todos = []

  let [Todos, SetTodos] = React.useState(todos)

  let [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    .then(response => response.json())
    .then(todosJS => {
      setTimeout(() => {
        SetTodos(todosJS)
        setLoading(false)
      }, 1000);
      
    })
  }, [])
  

  let OnChange = (id) => {
    SetTodos(
      Todos.map((td) => {
        if(td.id === id){
          td.completed = !td.completed;
        }
        console.log(td.completed);
        return td;
      })
    );
  }

  let removeItem = (id) =>{
    SetTodos(
      Todos.filter(td => td.id !== id  )
      )
  }

  let addTodo = (text) => {
    SetTodos(Todos.concat([{
      title : text,
      id: Date.now(),
      completed : false
    }]))
  }
  let ChangeText = (value) => {
    Todos.title = value;
  }


  return (
    <Context.Provider value={{removeItem, Todos, loading, ChangeText}}>
    <div className={style.wrapper}>
    
       <TodoList addTodo={addTodo} todo={Todos} OnToggle={OnChange}/>
      
    </div>
    </Context.Provider>
  );
}

export default App;
