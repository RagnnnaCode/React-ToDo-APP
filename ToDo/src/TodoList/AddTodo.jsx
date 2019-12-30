import React, {useState} from 'react'
import style from "./Todo.module.css"

const AddTodo = (props) => {

  const [value, setValue] = useState('');
  let submitHandler = (event) =>{
      event.preventDefault();

      if(value.trim()){
          props.onCreate(value)
          setValue('');
      }
  }

    return (
        <div>
            <form action="" className={style.formToDo} onSubmit={submitHandler}>
                <input value={value} onChange={event => setValue(event.target.value)} type="text" placeholder="Write..."/>
                <button>Add ToDo</button>
            </form>
        </div>
    )
}
export default AddTodo;