import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function uuuseTasks() {
  return useContext(TaskContext);
}
