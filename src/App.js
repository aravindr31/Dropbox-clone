import "./App.css";
import Activezone from "./Components/Activezone";
import AppContent from "./Components/AppContent";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App_Body">
      <Activezone />
      <AppContent />
      </div>
    </div>
  );
}

export default App;
