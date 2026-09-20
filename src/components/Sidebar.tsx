import {Project} from "../App";
import Button from "./Button";

type SidebarInputs = {
  projects: Project[]
  selectedProjectId: string
  onAddProject: () => void
  onProjectSelected: (id: string) => void
}

export function Sidebar({projects, selectedProjectId, onAddProject, onProjectSelected}: SidebarInputs) {

  return <>
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <Button label="+ Add project" onClick={onAddProject} />
      <ul className="mt-8">
        {projects.map((project) => {
          let listButtonClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
          if (project.id === selectedProjectId) {
            listButtonClasses += ' bg-stone-800 text-stone-200'
          } else {
            listButtonClasses += ' text-stone-400'
          }
            return (
              <li key={project.id}>
                <button
                  onClick={() => onProjectSelected(project.id)}
                  className={listButtonClasses}
                >
                  {project.title}
                </button>
              </li>
            )}
        )}
      </ul>
    </aside>
  </>
}