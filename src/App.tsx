import {Sidebar} from "./components/Sidebar";
import NoProjectView from "./components/NoProjectView";
import NewProjectView from "./components/NewProjectView";
import {useState} from "react";

export type Project = {
  title: string
  description: string
  dueDate: Date
}

function App() {

  const [currentProjects, setCurrentProjects] = useState<Project[]>([])
  const [isNewProjectBeingCreated, setIsNewProjectBeingCreated] = useState<boolean>(false)
  function handleCreateNewProject() {
    setIsNewProjectBeingCreated(true)
  }

  function handleSaveNewProject(project: Project) {
    setCurrentProjects(prevState => [...prevState, project])
    setIsNewProjectBeingCreated(false)
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleCreateNewProject}
        projects={currentProjects}
      />
      {
        currentProjects.length === 0 && !isNewProjectBeingCreated ? <NoProjectView onAddProject={handleCreateNewProject}></NoProjectView> : null
      }
      {
        isNewProjectBeingCreated ? <NewProjectView onSave={handleSaveNewProject} onCancel={() => {setIsNewProjectBeingCreated(false)}}></NewProjectView> : null
      }
    </main>
  );
}

export default App;
