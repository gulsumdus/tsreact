import { Heading } from "./components/Heading"
import { Section } from "./components/Section"
import { Counter } from "./components/Counter"

import { useState } from "react"
import { List } from "./components/List"

function App() {
  const [count, setCount] = useState<number>(0)
 

  return (
    <>
   <Heading title= {"Hello"}/>
   <Section> This is the section Component</Section>
   <Counter setCount={setCount}>Count is {count}</Counter>
   <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="gold">{item}</span>}></List>
   </>
  )
}

export default App
