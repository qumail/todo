import { Button } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

export default () => {
    const [ todos, setTodos] = useState([]);
    const [ todo , setTodo ] = useState(''); 
    const removeTodo = todo => {
        setTodos(todos.filter(t => t !== todo));
    }
        return (
            <>
             <h1>Basic Todo APP</h1>
              <Input placeholder="Enter Todo"  value={todo} onChange={(e) => setTodo(e.target.value)} />

              <Button onClick={() => setTodos([...todos,todo ])} type="primary">Add</Button>
              {todos.map(todo =>(
                  <>
                  <h1>{todo}</h1>
                  <Button onClick={() => removeTodo(todo)} type="primary">Remove</Button>
                  </>
              ))}
              </> 
        ); 
}
