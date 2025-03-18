import { ChangeEvent, ReactNode, useReducer } from 'react'// useReducer ile useState kullanımına gerek kalmaz
  
type ChildrenType = {

    children: (num: number) => ReactNode
}

export const Counter = ({ children }: ChildrenType) => {
    // const [count, setCount] = useState<number>(1)- gerek kalmadı
    //const [state, dispatch] = useReducer(reducer, initState)

  
    // return (
    //     <div>
    //         <h1>{children(state.count)}</h1>
    //         <div>
    //             <button onClick={increment}> + </button>
    //             <button onClick={decrement}> - </button>
    //         </div>
    //         <input type="text" onChange={handleTextInput}></input>
    //         <h2>{state.text}</h2>

    //     </div>
    // )
}
