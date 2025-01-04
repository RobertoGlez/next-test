import api from './axiosClient';
import { Task } from '@/store/slices/taskSlice';

// Obtener todas las tareas
export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

// Agregar una nueva tarea
export const addTask = async (task: Omit<Task,'id'>) => {
  const response = await api.post('/tasks', {
    title: task.title,
    completed: task.completed,
    description: task.description
  });
  return response.data;
};

// Actualizar una tarea existente
export const updateTask = async (id: string, updates: Omit<Task,'id'>) => {
  const response = await api.patch(`/tasks/${id}`, {
    title: updates.title,
    completed: updates.completed,
    description: updates.description
  });

  return response.data;
};

// Eliminar una tarea
export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
