import { useTodo, type Filter } from "../../context/TodoContext";
import { Button } from "../UI/Button/Button";
import styles from "./Filter.module.css";
import cn from "classnames";

export function Filter() {
  const { filter, setFilter } = useTodo();

  return (
    <div className={styles["filter"]}>
      <span className={styles["sort-by"]}>Сортировать:</span>
      {(["Все", "Завершенные"] as Filter[]).map((f) => (
        <Button
          key={f}
          type="button"
          className={cn(styles["filter-btn"], {
          [styles["active"]]: filter === f
          })}
          onClick={() => setFilter(f)}
        >
          {f}
        </Button>
      ))}
    </div>
  );
}
