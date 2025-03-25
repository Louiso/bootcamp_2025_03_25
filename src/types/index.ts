export enum TaskStatus {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Complete = "COMPLETE",
}
  
export interface Task {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
}

export interface StatusConfig {
  label: string;
  color: string;
  status: string;
}

export type Maybe<T> = T | undefined | null