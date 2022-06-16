import { useState } from "react"

export default function Home() {
    const [counter,setCounter] = useState(0);
    return <div>
        Hello World
        {counter}
        <button onClick={()=> setCounter(counter + 1)}>Increase</button>
    </div>
}