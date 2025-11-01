import styles from "./InputField.module.css";
import { Input } from "../UI/Input/Input";
import { Select } from "../UI/Select/Select";
import { Button } from "../UI/Button/Button";
import { HiOutlinePlus } from "react-icons/hi";

export function InputField() {
  return (
      <div className={styles["input-field"]}>
        <Input type="text" placeholder="Введите задачу..." />
        <Select />
        <Button type="submit">
          <HiOutlinePlus /> Новая задача
        </Button>
      </div>
  );
}
