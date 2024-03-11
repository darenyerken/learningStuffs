import {Todo} from '@/types'
import { Dispatch, SetStateAction } from 'react'

interface TodoFilterProps {
    setListShow: Dispatch<SetStateAction<"all" | "completed" | "uncompleted">>
}

export default function TodoFilter({setListShow }: TodoFilterProps) {
    return(
        <>
            <button onClick={()=>setListShow('all')}>全部</button>
            <button onClick={()=>setListShow('completed')}>已处理</button>
            <button onClick={()=>setListShow('uncompleted')}>待办</button>
        </>
    )
}