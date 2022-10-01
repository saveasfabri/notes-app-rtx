import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  
  return (
    <div className="App">
      <h1>New app in progress</h1>
      <TaskList />
      <TaskForm />
      <Task />
    </div>
  );
};

export default App;
