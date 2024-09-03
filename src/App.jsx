import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [inputtext, setInputtext] = useState("");
  const [data, setData] = useState(["Eat", "Code", "Sleep", "Repeat"]);
  const [msg, setMsg] = useState("");

  const handleDelete = (indexToDelete) => {
    const newData = data.filter((_, index) => index !== indexToDelete);
    setData(newData);
  };

  const handleEdit = (indexToEdit) => {
    const taskToEdit = data[indexToEdit];
    setInputtext(taskToEdit);
    handleDelete(indexToEdit);
  };

  const handleAddTask = () => {
    const trimmedInput = inputtext.trim();
    const regex = /^[a-zA-Z0-9\s]+$/;
  
    if (trimmedInput) {
      if (!regex.test(trimmedInput)) {
        // Invalid input
        setMsg("Task name can only contain letters, numbers, and spaces.");
        setInputtext("");
        return;
      }
  
      if (
        !data.some((task) => task.toLowerCase() === trimmedInput.toLowerCase())
      ) {
        const newData = [...data, trimmedInput];
        setData(newData);
        setInputtext("");
        setMsg("");
      } else {
        setMsg(`${trimmedInput} already exists!`);
        setInputtext("");
      }
    } else {
      setInputtext("");
    }
  };
  

  return (
    <div className="app-layout">
      <h1>TODO APP</h1>
      <div className="input-bar">
        <input
          type="text"
          value={inputtext}
          placeholder="Task to add.."
          onChange={(e) => setInputtext(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <p>{msg}</p>
      {data.map((task, index) => (
        <Card
          key={index}
          task={{ t: task, i: index }}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
