import {ChangeEvent, useState} from "react";

type NewTaskInput = {
  onAddTask: (task: string) => void
}
export default function NewTask({onAddTask}: NewTaskInput) {
  const [task, setTask] = useState<string>('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleTaskAdded(task: string) {
    if (task.trim() === '') {
      return
    }
    onAddTask(task)
    setTask('')
  }

  return (
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={task}
        />
        <button onClick={() => handleTaskAdded(task)}>Add Task</button>
      </div>
  )
}