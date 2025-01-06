import ButtonCustom from "@/components/buttons/ButtonCustom";
import { Task } from "@/store/slices/taskSlice";
import { useState } from "react";
interface TaskItemProps {
    style?: React.CSSProperties;
    item: Task,
    onEdit: (task:Task)=>void,
    onDelete: (id: string)=>void,
}
export const TaskItem:React.FC<TaskItemProps> = ({
    style,
    item,
    onDelete,
    onEdit,
})=>{
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription]= useState(item.description);
    const [completed, setCompleted] = useState(item.completed);

    const handleLocalEdit = ()=>{
        onEdit({
            id: item.id,
            createdAt: item.createdAt,
            completed: completed,
            description: description,
            title: title
        });
    }
    const isChange = (): boolean=>{
        return completed !== item.completed || description !== item.description || title !== item.title
    }
    return <div style={{
        display:'flex',
        flexDirection:'row',
        background: editMode ? '#b8cfff':'whitesmoke',
        color:'black',
        width:'80%',
        margin:'auto',
        padding:'10px',
        boxSizing:'border-box',
        borderRadius:'5px',
        ...style
    }}>
        <div hidden>
            id: {item.id}
        </div>
        {
            editMode 
            ? <div style={{
                display:'flex',
                width:'100%',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:'10px'
            }}>
                <div>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        gap:'10px'
                    }}>
                        <input type="checkbox" checked={completed} onChange={()=>setCompleted(!completed)}/>
                        <input style={{
                            padding:'5px',
                            boxSizing:'border-box',
                            fontWeight:'600'
                        }} type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                        <input style={{
                            padding:'5px',
                            boxSizing:'border-box',
                        }} type="text" value={description} onChange={(event)=>setDescription(event.target.value)}/>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    gap:'10px',

                }}>
                    <ButtonCustom
                        disabled={!isChange()}
                        onClick={()=>handleLocalEdit()}
                        text="guardar"/>
                    <ButtonCustom
                        text="cancelar"
                        variant="danger" 
                        onClick={()=>setEditMode(false)}/>
                </div>
                
            </div>
            : <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                width:'100%' 
            }}>
                 <div className="LabelTask" style={{
                    display:'flex',
                    flexDirection:'column',
                }}>
            
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        gap:'10px',
                    }}>
                        <div>
                            <input type="checkbox" checked={item.completed} onChange={()=> {
                                onEdit({
                                    completed: !item.completed,
                                    ...{
                                        description: item.description,
                                        id: item.id,
                                        title: item.title,
                                        createdAt: item.createdAt,
                                    },
                                })
                            }}/>
                        </div>
                        <div style={{  
                        fontSize:'15px',
                        fontWeight:'600',
                        }}>
                            {item.title}
                        </div>
                
                    </div>
                    <div style={{
                        fontSize:'14px',
                        fontWeight:'400'
                    }}>
                        {
                            item.description
                        }
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    gap:'10px',
                }}>
                    <div>
                        <ButtonCustom text="editar" onClick={()=> {
                            //onEdit(item)
                            setEditMode(true);
                        }}/>
                    </div>
                    <div>
                        <ButtonCustom text="eliminar" variant="danger" onClick={()=> onDelete(item.id)}/>
                    </div>
                </div>
            </div>
        }
       
       
    </div>
}