import { useTodo } from "../../context/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.length === 0 ? (
        <img className={styles["empty"]} src="src\assets\no-todo.svg"></img>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))
      )}
    </>
  );
}
