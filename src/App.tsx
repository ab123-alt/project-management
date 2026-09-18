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
}

function App() {

  const [currentProjects, setCurrentProjects] = useState<Project[]>([])
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

  function getContent() {
    if (selectedProjectId) {
      return <ProjectView project={currentProjects.find(project => project.id === selectedProjectId)!} />
    }
    if (isNewProjectBeingCreated) {
      return <NewProjectView onSave={handleSaveNewProject} onCancel={handleNewProjectCreationCancelled} />
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
