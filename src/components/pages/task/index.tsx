import { useState } from "react"
import { TaskItem } from "./items/TaksItems";
import { TaskItemInterface } from "@/types/task";

export default function TaskPage(){
    const [items] = useState<TaskItemInterface[]>([
        {
            id:1,
            name:'Tarea Numero uno'
        },
        {
            id:2,
            name:'Tarea numero dos'
        }
    ]);
    return <div style={{
        width:'100%',
        height:'100%',
        padding:'15px',
        boxSizing:'border-box'
    }}>
        <div style={{
            fontSize:'20px',
            fontWeight:'600'
        }}>
            Task Manager List
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'10px'
        }}>
            {
                items.map((item,index)=>{
                    return <TaskItem item={item} key={index}/>
                })
            }
        </div>
        
    </div>
}