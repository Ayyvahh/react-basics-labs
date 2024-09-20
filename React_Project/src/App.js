import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="container">
      <h1>Ava's React Project</h1>
      <Task title="Dishes" deadline="Today">
        Empty Dishwasher
      </Task>
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
      </Task>
      <Task title="Tidy" deadline="Today">
        Organise Cabinets
        </Task>
    </div>
  );
}

export default App;
