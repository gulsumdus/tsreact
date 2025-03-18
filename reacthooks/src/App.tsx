import { useState, useEffect, useCallback, useMemo, useRef} from 'react'

interface User {
  id: number,
  username: string
}
function App() {
  const [count, setCount] = useState<number>(0) //usage useState (1)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => { //usage useEffect (2)
    console.log("mounting")
    console.log("Users:", users)

    return () => console.log("unmounting")
  }, [users])//her users değiştiğinde render edilir

  const addTwo = useCallback((): void => setCount(prev => prev + 1), [])//usage of useCallback (3)
  //_________________________________________________________________________________________
  type fibFunc = (num: number) => number

  const fib: fibFunc = (num: number) => {
    if (num < 2) return num
    return fib(num - 1) + fib(num - 2)
  }
  const myNum: number = 10

  const result = useMemo<number>(() => fib(myNum), [myNum])//usage of useMemo (4)
//__________________________________________________________________________________________
const inputRef = useRef<HTMLInputElement>(null) //usage of useRef (5)
console.log(inputRef?.current)
console.log(inputRef?.current?.value)

//_________________________________________________________________________________________
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type= "text"></input>
    </>
  )
}

export default App
