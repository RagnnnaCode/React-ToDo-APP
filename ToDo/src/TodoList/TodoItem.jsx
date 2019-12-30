import React, {useContext, useState} from 'react'
import style from './Todo.module.css'
import Context from '../context'

const TodoItem = (props) => {
 
    let onChange = props.OnToggle;
    let id = props.id;
    const {removeItem, ChangeText} = useContext(Context);
    
    const [value, setValue] = useState(props.title);
    const [change, setChange] = useState(false);

    let OnReduct = () => {
        setChange(true);
    }
    let OnUnReduct = () => {
        setChange(false);
    }
    let onChangeValue = (event) => {
        setValue(
            event.target.value
       )
       ChangeText(value);
    }

    return (
       
        <div>
            <li className={props.completed ? style.done : style.undone}>
                <input type="checkbox" checked={props.completed} onChange={() =>  onChange(id) } />
                <strong>{props.i + 1}</strong>
            
                 {!change ? props.title : <input value={value} onChange={(e) => {onChangeValue(e)}} className={style.inp} onBlur={() => {OnUnReduct()}} type="text"/>}
                 <button onClick={()=>{ OnReduct()}} className={style.but}>R</button>
                <button onClick={() => removeItem(id)}>&times;</button>
            </li>
        </div>
       
    )
}
export default TodoItem;