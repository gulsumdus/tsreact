//TypeScript çalışmaları
import './App.css';
import Input from './components/Input';
import Message from './components/Message';
import { useState } from 'react';
import { Todos } from "./types/type"
const App: React.FC = () => { // burada componentin tipini belirledik; FC: function Componrnt 

  const [todo, setTodo] = useState<string>('')//JS'den farklı olarak todo için tip belirlemesi yapılır ve parantezle bu şekilde
  const [todos, setTodos] = useState<Todos[]>([])

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }])
    setTodo('')
  }

  const deleteMessage = (id: number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  console.log(todos, "todos");

  return (
    <div>
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message deleteMessage={deleteMessage} todos={todos} />
    </div>
  )
}

export default App;
