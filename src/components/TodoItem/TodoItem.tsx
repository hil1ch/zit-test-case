import { useTodo } from "../../context/TodoContext";
import { getPriorityColor } from "../../utils/getPriorityColor";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styles from "./TodoItem.module.css";
import { HiPencil, HiTrash, HiX, HiCheck } from "react-icons/hi";
import cn from "classnames";

export type Priority = "Low" | "Medium" | "High";

export interface ITodo {
  id: string;
  text: string;
  completed?: boolean;
  priority: Priority;
}

export function TodoItem({ text, priority, id, completed }: ITodo) {
  const {
    deleteTodo,
    toggleTodo,
    clickToEdit,
    editingId,
    editTodo,
    error,
    cancelEdit,
    updateTodo,
    setEditTodo,
    setEditError,
    editError
  } = useTodo();
  const { color } = getPriorityColor(priority);

  const handleUpdateTodo = () => {
    if (editTodo.trim().length === 0) {
      setEditError(true);
      return;
    }
    setEditError(false);
    updateTodo(id);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);

    if (error && e.target.value.trim().length > 0) {
      setEditError(false);
    }
  }

  return (
    <div
      className={styles["item"]}
      style={
        {
          "--priority-color": color,
        } as React.CSSProperties
      }
    >
      <Input
        className={styles["checkbox"]}
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <div className={styles["item-content"]}>
        {editingId === id ? (
          <div className={styles["edit-container"]}>
            <Input
              value={editTodo}
              onChange={handleEditInputChange}
              className={`${styles["edit-input"]} ${editError ? styles["error"] : ""}`}
              type="text"
            />
            <div className={styles["edit-actions"]}>
              <Button
                type="button"
                className={styles["save-btn"]}
                onClick={handleUpdateTodo}
              >
                <HiCheck />
              </Button>
              <Button
                type="button"
                className={styles["cancel-btn"]}
                onClick={cancelEdit}
              >
                <HiX />
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles["item-info"]}>
              <p
                className={cn(styles["text"], {
                  [styles["completed"]]: completed,
                })}
              >
                {text}
              </p>
              <span className={styles["priority"]}>{priority}</span>
            </div>

            <div className={styles["actions"]}>
              <Button
                type="button"
                className={styles["edit"]}
                onClick={() => clickToEdit({ id, text, priority, completed })}
              >
                <HiPencil />
              </Button>
              <Button
                type="button"
                className={styles["delete"]}
                onClick={() => deleteTodo(id)}
              >
                <HiTrash />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
