import ButtonCustom from "@/components/buttons/ButtonCustom";
import { TaskItemInterface } from "@/types/task";
interface TaskItemProps {
    style?: React.CSSProperties;
    item: TaskItemInterface
}
export const TaskItem:React.FC<TaskItemProps> = ({
    style,
    item
})=>{
    return <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:'5px',
        background:'white',
        color:'black',
        maxWidth:'400px',
        padding:'10px',
        boxSizing:'border-box',
        borderRadius:'5px',
        ...style
    }}>
        <div className="NombreTask">
            {
                item.name
            }
        </div>
        <div style={{
            display:'flex',
            gap:'10px',
        }}>
            <div>
                <ButtonCustom text="editar"/>
            </div>
            <div>
                <ButtonCustom text="eliminar" variant="danger"/>
            </div>
        </div>
    </div>
}