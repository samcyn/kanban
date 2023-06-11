interface ISubtask {
  title: string
  isCompleted: boolean
}

interface ITask {
  id: string
  title: string
  description: string
  // status: string // this is IColumn name
  status: IColumn['name']
  subtasks: ISubtask[]
}

interface IColumn {
  id: string
  name: string
  tasks: ITask[]
}

interface IBoard {
  id: string
  name: string
  columns: IColumn[]
}



