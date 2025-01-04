import ButtonCustom from "@/components/buttons/ButtonCustom"
import InputField from "@/components/input/CustomInput"
import { Task } from "@/store/slices/taskSlice"
import { useState } from "react"

interface TaskInputsProps {
    onSubmit:(item: Omit<Task,'id'>)=>void
}
export const TaskInputs: React.FC<TaskInputsProps> = ({
    onSubmit,
})=>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const isValid = () :boolean=>{
        return title !== undefined && title !== '' && description !== undefined && description !== ''
    }
    const sendForm = ()=>{
        onSubmit({
            description,
            title,
            completed: false
        })
    }
    return <div style={{
        maxWidth:'500px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px',
        flexDirection:'column'
    }}>
        <InputField
          value={title}
          onChange={setTitle} 
          id="title" 
          label="Nombre" 
          key={'NombreInput'} 
          type="text"/>
        <InputField
          value={description}
          onChange={setDescription} 
          id="title" 
          label="Descripcion" 
          key={'DescriptionInput'} 
          type="text"/>
        <ButtonCustom style={{
            width:'100%'
        }} 
        text="Agregar tarea"
        disabled={!isValid()}
        onClick={()=>sendForm()}/>
    </div>
}