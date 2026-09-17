import {Sidebar} from "./components/Sidebar";
import NoProjectView from "./components/NoProjectView";
import NewProjectView from "./components/NewProjectView";

function App() {
  function handleCreateNewProject() {

  }

  function handleSaveNewProject() {

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleCreateNewProject}></Sidebar>
      {/*<NoProjectView onAddProject={handleCreateNewProject}></NoProjectView>*/}
      <NewProjectView onSave={handleSaveNewProject}></NewProjectView>
    </main>
  );
}

export default App;
