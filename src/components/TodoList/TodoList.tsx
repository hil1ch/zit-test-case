import { useTodo } from "../../context/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import noTodoImage from "../../assets/no-todo.svg";

export function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.length === 0 ? (
        <img
          className={styles["empty"]}
          src={noTodoImage}
          alt="Нет задач"
        ></img>
      ) : (
        todos.map((todo) => (
          <TodoItem
            id={todo.id}
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
