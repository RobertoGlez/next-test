import { useEffect } from "react"
import { TaskItem } from "./items/TaksItems";
import { Task } from "@/store/slices/taskSlice";
import { TaskInputs } from "./input/TaksInput";
import { addTask, deleteTask, getTasks, updateTask } from "@/lib/apiCalls";
import { RootState } from '@/store';
import { setTasks, addTask as addTaskAction, updateTask as updateTaskAction, deleteTask as deleteTaskAction, setLoading, setError } from '@/store/slices/taskSlice';
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function TaskPage(){
    const dispatch = useDispatch();
    const { tasks, loading } = useSelector((state: RootState) => state.task);
  
    const fetchTasks = async () => {
        dispatch(setLoading(true));
        try {
          const data = await getTasks(); // Obtener las tareas desde la API
          dispatch(setTasks(data)); // Actualiza el estado global con las tareas
        } catch (err: any) {
          dispatch(setError(err.message)); // Maneja el error
        } finally {
          dispatch(setLoading(false)); // Deja de mostrar el cargando
        }
      };
    useEffect(()=>{
        fetchTasks();
    },[]);

    const handleEditTask = async(item: Task)=>{
        console.log('edit task', item);
        dispatch(setLoading(true));
        const result = await updateTask(item.id,item);
        if(result){
            dispatch(updateTaskAction(item));
        }else{
            console.error('No se pudo editar');
        }
        dispatch(setLoading(false));
    }
    const handleDeleteTask = async(id: string)=>{
        dispatch(setLoading(true));
        const request = await deleteTask(id);
        if(request){
            dispatch(deleteTaskAction(id));
        }else{
            console.error('ocurrio un error al eliminar la tarea');
        }
        dispatch(setLoading(false));
    }
    const handleAddTask = async (item: Omit<Task, 'id' | 'createdAt'>)=>{
        dispatch(setLoading(true));
        const result = await addTask(item);
        if(result){
            const task: Task = result;
            dispatch(addTaskAction(task))
        }else{
            console.error('No se pudo guardar la tarea');
        }
        dispatch(setLoading(false));
    }
    if (loading){
        return <LoadingScreen/>
    }
    return <div style={{
        width:'100%',
        height:'100%',
        padding:'15px',
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'row',
        gap:'15px',
    }}>
       
        <div>
            <div style={{
                fontSize:'20px',
                fontWeight:'600'
            }}>
                Task Manager List
            </div>
            <TaskInputs onSubmit={(item)=>{
               handleAddTask({
                ...item
               });
            }}/>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            width:'100%',
        }}>
            {
                tasks.map((item,index)=>{
                    return <TaskItem item={item} key={index} onDelete={handleDeleteTask} onEdit={handleEditTask}/>
                })
            }
        </div>
        
    </div>
}