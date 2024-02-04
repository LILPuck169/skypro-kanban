import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../pages/RouteObjects/RouteObjects";

export const TaskContext = createContext(null);
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();

  function updateTask(data) {
    setTasks(data.tasks);
    navigate(AppRoutes.MAIN);
  }

  return (
    <TaskContext.Provider value={{ tasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}
