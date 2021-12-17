import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "School Metting",
      day: "Feb 7th at 2:30pm",
      reminder: false
    }
  ]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const getTaskFromServer = await fatchTask();
  //     setTasks(getTaskFromServer);
  //   };

  //   getTasks();
  // }, []);

  // const fatchTask = async () => {
  //   const res = await fetch("https://ljdhd.csb.app/tasks");
  //   const data = await res.json();
  //   return data;
  // };

  //Add Task
  const addTask = (task) => {
    // const res = await fetch("https://ljdhd.csb.app/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Contant-type": "aplication/json"
    //   },
    //   body: JSON.stringify(task)
    // });

    // const data = await res.json();

    // setTasks([...tasks, data]);

    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Delete Task
  // const deleteTask = async (id) => {
  //   await fetch(`https://ljdhd.csb.app/tasks/${id}`, {
  //     method: "DELETE"
  //   });
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.filter((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task Found"
      )}
    </div>
  );
}

export default App;
