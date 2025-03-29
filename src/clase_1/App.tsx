import {
  Button,
  Modal,
  Paper,
} from "@mui/material";

import { useState } from "react";
import { initTasks } from "./data";
import { paperModalStyle } from "../styles";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm";
import { Maybe, Task, TaskStatus } from "./types";
import { produce } from 'immer'
import { merge } from "./utils";

export default function App() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<Maybe<Task>>(null)
  const [ tasks, setTasks ] = useState(initTasks)

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setTask(null)
  };

  const _handleSubmit = (data: any) => {
    if(data.id) {
      // actualizar
      setTasks((prev) => {
        return produce(prev, (draft) => {
          const task = draft.find((task) => task.id === data.id)

          if(task) merge(task, data)
        }) 
      })

      return
    }

    // crea
    setTasks((prev) => [...prev, {
      ...data,
      id: Math.random().toString(),
      status: TaskStatus.Pending
    }])
  }

  const _handleEditTask = (task: Task) => {
    setTask(task)
    setOpen(true)
  }

  const _handleDeleteTask = (taskId: string) => {
    setTasks((prev) => {
      return produce(prev, (draft) => {
        const index = draft.findIndex((task) => task.id === taskId)

        if(index >= 0) {
          draft.splice(index, 1)
        }
      }) 
    })
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Agregar </Button>
      <TaskTable tasks={tasks} onEdit={_handleEditTask} onDelete={_handleDeleteTask}/>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Paper sx={paperModalStyle}>
          <TaskForm onSubmit={_handleSubmit} task={task} onClose={handleClose}/>
        </Paper>
      </Modal>
    </div>
  );
}
