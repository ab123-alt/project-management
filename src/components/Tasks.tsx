import NewTask from "./NewTask";

type TasksInput = {
  tasks: string[]
  onAddTask: (task: string) => void
}
export default function Tasks({tasks, onAddTask}: TasksInput) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask}></NewTask>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
        )
      }
      {tasks.length > 0 &&
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task, index) => {
              return (
                <li key={index} className="flex justify-between my-4">
                  <span>{task}</span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              )
            })}
          </ul>
      }
    </section>
  )
}