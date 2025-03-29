import { keyBy } from "es-toolkit";
import { StatusConfig, Task, TaskStatus } from "../types";

export const statusConfigs: StatusConfig[] = [
  {
    label: 'Pendiente',
    color: '#6C7591',
    status: TaskStatus.Pending
  },
  {
    label: 'En progreso',
    color: '#FFC14C',
    status: TaskStatus.InProgress
  },
  {
    label: 'Completado',
    color: '#198754',
    status: TaskStatus.Complete
  }
]


export const initTasks: Task[] = [
  {
    id: "1",
    description: "Esta es una tarea 1",
    name: "tarea 1",
    status: TaskStatus.Pending,
  },
  {
    id: "2",
    description: "Esta es una tarea 2",
    name: "tarea 2",
    status: TaskStatus.InProgress,
  },
  {
    id: "3",
    description: "Esta es una tarea 3",
    name: "tarea 3",
    status: TaskStatus.Complete,
  },
];

export const statusConfigByStatus = keyBy(statusConfigs, ({ status }) => status)