import { FC, useState } from "react";
import { Maybe, Task } from "../../types"
import { Box, Button, TextField } from "@mui/material";

type SubmitTask = Omit<Task, 'id' | 'status'> & { id?: string; }

interface TaskFormProps {
  task?: Maybe<Task>;
  onSubmit: (data: SubmitTask) => void;
  onClose: () => void;
}

const TaskForm: FC<TaskFormProps> = ({
  task,
  onSubmit,
  onClose
}) => {
  const [ state, setState ] = useState({
    id: task?.id,
    name: task?.name ?? '',
    description: task?.description ?? ''
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit(state)

    setState({
      id: undefined,
      name: '',
      description: ''
    })

    onClose()
  }

  return (
    <Box onSubmit={handleSubmit} component='form' display='flex' flexDirection='column' gap={2}>
      <TextField 
        label="Tarea" 
        variant="outlined" 
        fullWidth
        name="name"
        onChange={handleChange}
        value={state.name}/>
    
      <TextField 
        label="Descripcion" 
        variant="outlined" 
        fullWidth
        name="description"
        onChange={handleChange}
        value={state.description}/>

      <Box display='flex' justifyContent='flex-end'>
        <Button type="submit" variant="contained">Enviar</Button>
      </Box>
    </Box>
  )
}

export default TaskForm