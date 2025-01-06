import { DateTime } from 'luxon';
import api from './axiosClient';
import { Task } from '@/store/slices/taskSlice';

// Obtener todas las tareas
export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

// Agregar una nueva tarea
export const addTask = async (task: Omit<Task,'id' | 'createdAt'>) => {
  const response = await api.post<Task>('/tasks', {
    title: task.title,
    completed: task.completed,
    description: task.description,
    createdAt: DateTime.utc().toJSDate()
  });
  return response.data;
};

// Actualizar una tarea existente
export const updateTask = async (id: string, updates: Task) => {
  const response = await api.put(`/tasks/${id}`, {
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
