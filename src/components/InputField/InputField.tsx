import styles from "./InputField.module.css";
import { Input } from "../UI/Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../UI/Button/Button";
import { HiOutlinePlus } from "react-icons/hi";
import { useTodo } from "../../context/TodoContext";

export function InputField() {
  const { addTodo, newTodo, setNewTodo, error, setError } = useTodo();
  
  const handleAddTodo = () => {
    if (newTodo.trim().length === 0) {
      setError(true);
      return;
    }
    setError(false);
    addTodo();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);

    if (error && e.target.value.trim().length > 0) {
      setError(false);
    }
  };

  return (
    <>
      <div className={styles["input-field"]}>
        <Input
          className={`${styles["input"]} ${error ? styles["error"] : ""}`}
          type="text"
          placeholder="Введите задачу..."
          value={newTodo}
          onChange={handleInputChange}
        />
        <Select />
        <Button type="submit" className={styles["add"]} onClick={handleAddTodo}>
          <HiOutlinePlus /> Новая задача
        </Button>
      </div>
    </>
  );
}
