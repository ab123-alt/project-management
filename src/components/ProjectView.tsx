import {Project} from "../App";
import Tasks from "./Tasks";

type ProjectViewInput = {
  project: Project
  onAddTask: (projectId: string, task: string) => void
}

export default function ProjectView({project, onAddTask}: ProjectViewInput) {
  const formattedDueDate = new Date(project.dueDate).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <br/>
      <Tasks tasks={project.tasks} onAddTask={(task) => onAddTask(project.id, task)}></Tasks>
    </div>
  )
}