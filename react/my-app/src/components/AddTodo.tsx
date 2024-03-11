import {useState} from 'react';

// props类型
interface AddtodoProps {
    addTodo: (content: string) => void;
}

export default function Addtodo({addTodo}: AddtodoProps){
    const [content, setContent] = useState("");
    // 提交表单
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 阻止默认提交
        e.preventDefault();
        // 空值判断
        if(content.trim().length === 0) return;

        addTodo( content);
        setContent("");
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}