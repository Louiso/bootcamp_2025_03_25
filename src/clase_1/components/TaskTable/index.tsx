import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Task } from "../../types";
import { FC } from "react";
import { statusConfigByStatus } from "../../data";

interface TaskTableProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const TaskTable: FC<TaskTableProps> = ({ tasks, onEdit, onDelete }) => {

  const handleClickEditButton = (task: Task) => () => {
    onEdit(task)
  }

  const handleClickDeleteButton = (task: Task) => () => {
    onDelete(task.id)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            const statusConfig = statusConfigByStatus[task.status]

            return (
              <TableRow
                key={task.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.name}
                </TableCell>
                <TableCell align="right">
                  <Button sx={{ backgroundColor: statusConfig.color,color: 'white' }}>
                  {statusConfig.label}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <IconButton size='small' onClick={handleClickEditButton(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton size='small' onClick={handleClickDeleteButton(task)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TaskTable