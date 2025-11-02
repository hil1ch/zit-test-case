import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styles from "./TodoItem.module.css";
import { HiPencil, HiTrash } from "react-icons/hi";

export type Priority = "Low" | "Medium" | "High";

export interface ITodo {
  id?: string;
  text: string;
  completed?: boolean;
  priority: Priority
}

export function TodoItem({ text, priority }: ITodo) {
  return (
    <div className={styles["item"]}>
      <Input className={styles["checkbox"]} type="checkbox" />
      <div className={styles['item-info']}>
        <p className={styles["text"]}>{text}</p>
        <span className={styles['priority']}>{priority}</span>
      </div>
      <div className={styles["actions"]}>
        <Button type="button" className={styles["edit"]}>
          <HiPencil />
        </Button>
        <Button type="button" className={styles["delete"]}>
          <HiTrash />
        </Button>
      </div>
    </div>
  );
}
