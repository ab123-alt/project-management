import {Sidebar} from "./components/Sidebar";
import NoProjectView from "./components/NoProjectView";
import NewProjectView from "./components/NewProjectView";
import {useState} from "react";
import ProjectView from "./components/ProjectView";

export type Project = {
  id: string
  title: string
  description: string
  dueDate: Date
  tasks: Task[]
}

export type Task = {
  id: string
  text: string
}

const initProjects = [
  {
    id: 'hfhf-lslsls-kkd',
    title: 'Super important Project',
    description: 'This is a super important project to do. ASAP',
    dueDate: new Date('2026-05-10'),
    tasks: []
  },
  {
    id: 'hfhf',
    title: 'Learn React',
    description: 'This is a super important project to do. ASAP',
    dueDate: new Date('2026-05-10'),
    tasks: []
  },
  {
    id: 'hfhf-lslsls',
    title: 'Bake bread',
    description: 'This is a super important project to do. ASAP',
    dueDate: new Date('2026-05-10'),
    tasks: []
  },
]

function App() {

  const [currentProjects, setCurrentProjects] = useState<Project[]>(initProjects)
  const [isNewProjectBeingCreated, setIsNewProjectBeingCreated] = useState<boolean>(false)
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  function handleCreateNewProject() {
    setIsNewProjectBeingCreated(true)
    setSelectedProjectId('')
  }

  function handleSaveNewProject(project: Project) {
    setCurrentProjects(prevState => [...prevState, project])
    setIsNewProjectBeingCreated(false)
  }

  function handleProjectSelected(projectId: string) {
    setIsNewProjectBeingCreated(false)
    setSelectedProjectId(projectId)
  }

  function handleNewProjectCreationCancelled() {
    setIsNewProjectBeingCreated(false)
    setSelectedProjectId('')
  }

  function handleTaskAdded(projectId: string, task: Task) {
    setCurrentProjects(projects =>
      projects.map(project =>
          project.id === projectId
            ? {...project, tasks: [...project.tasks, task]}
            : project
      )
    )
  }

  function handleTaskDeletion(projectId: string, taskId: string) {
    setCurrentProjects(projects =>
      projects.map(project =>
        project.id === projectId
          ? {...project, tasks: project.tasks.filter(task => task.id != taskId)}
          : project
      )
    )
  }

  function getContent() {
    if (selectedProjectId) {
      return <ProjectView project={currentProjects.find(project => project.id === selectedProjectId)!}
                          onAddTask={handleTaskAdded}
                          onDeleteTask={handleTaskDeletion}
      />
    }
    if (isNewProjectBeingCreated) {
      return <NewProjectView onSave={handleSaveNewProject} onCancel={handleNewProjectCreationCancelled}/>
    }
    return <NoProjectView onAddProject={handleCreateNewProject}></NoProjectView>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleCreateNewProject}
        onProjectSelected={handleProjectSelected}
        projects={currentProjects}
        selectedProjectId={selectedProjectId}
      />
      {getContent()}
    </main>
  );
}

export default App;
