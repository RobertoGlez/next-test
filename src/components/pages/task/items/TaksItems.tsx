import ButtonCustom from "@/components/buttons/ButtonCustom";
import { Task } from "@/store/slices/taskSlice";
interface TaskItemProps {
    style?: React.CSSProperties;
    item: Task,
    onEdit: (task: Task)=>void,
    onDelete: (id: string)=>void,
}
export const TaskItem:React.FC<TaskItemProps> = ({
    style,
    item,
    onDelete,
    onEdit,
})=>{
    return <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:'5px',
        background:'white',
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
                <ButtonCustom text="editar" onClick={()=> onEdit(item)}/>
            </div>
            <div>
                <ButtonCustom text="eliminar" variant="danger" onClick={()=> onDelete(item.id)}/>
            </div>
        </div>
    </div>
}