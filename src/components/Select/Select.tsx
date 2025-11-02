import { useTodo } from "../../context/TodoContext";
import type { Priority } from "../TodoItem/TodoItem";
import styles from "./Select.module.css";
import { HiChevronDown } from "react-icons/hi";

const options = ["Low", "Medium", "High"];

export function Select() {
  const { priority, setPriority } = useTodo();

  return (
    <div className={styles["select-wrapper"]}>
      <select
        className={styles["select"]}
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <HiChevronDown className={styles["icon"]} />
    </div>
  );
}
