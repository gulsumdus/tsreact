import React from 'react'

type IProps={
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void //void türünde fonk.
}

const Input: React.FC<IProps> = ({todo, setTodo,addMessage}) => {
  return (
    <div>
        <input value={todo}
         onChange={e=> setTodo(e.target.value)}
          type="text" placeholder='Yazınız...'></input>
        <button onClick={addMessage}>Ekle</button>
    </div>
  )
}

export default Input 