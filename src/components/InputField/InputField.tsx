import styles from "./InputField.module.css";
import { Input } from "../UI/Input/Input";
import { Select } from "../UI/Select/Select";
import { Button } from "../UI/Button/Button";
import { HiOutlinePlus } from "react-icons/hi";

export function InputField() {
  return (
      <div className={styles["input-field"]}>
        <Input className={styles['input']} type="text" placeholder="Введите задачу..." />
        <Select />
        <Button type="submit" className={styles['add']}>
          <HiOutlinePlus /> Новая задача
        </Button>
      </div>
  );
}
