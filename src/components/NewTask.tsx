import {ChangeEvent, useState} from "react";
import {Task} from "../App";

type NewTaskInput = {
  onAddTask: (task: Task) => void
}
export default function NewTask({onAddTask}: NewTaskInput) {
  const [taskText, setTaskText] = useState<string>('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }

  function handleTaskAdded(taskText: string) {
    if (taskText.trim() === '') {
      return
    }
    onAddTask(
      {
        id: self.crypto.randomUUID(),
        text: taskText
      })
    setTaskText('')
  }

  return (
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={taskText}
        />
        <button onClick={() => handleTaskAdded(taskText)}>Add Task</button>
      </div>
  )
}