import {Sidebar} from "./components/Sidebar";
import NoProjectView from "./components/NoProjectView";

function App() {
  function handleAddProject() {

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject}></Sidebar>
      <NoProjectView onAddProject={handleAddProject}></NoProjectView>
    </main>
  );
}

export default App;
