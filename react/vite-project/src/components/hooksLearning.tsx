import { useState } from 'react'

export default function LearnHooks() {
    const [count,setCount] = useState<number>(0)
    return (
        <>
            <h1 className='text-yellow'>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>add</button>
        </>
    )
}