import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";
import { type ITodo, type Priority } from "../components/TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

interface ITodoContext {
  todos: ITodo[];
  newTodo: string;
  priority: Priority;
  error: boolean;
  setError: (error: boolean) => void;
  setPriority: (priority: Priority) => void;
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  setNewTodo: (newTodo: string) => void;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [error, setError] = useState(false);

  // Хранение todos в localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Добавление todo
  const addTodo = () => {
    const todo: ITodo = {
      id: uuidv4(),
      text: newTodo.trim(),
      completed: false,
      priority,
    };

    setTodos([todo, ...todos]);
    setNewTodo("");
    setPriority("Medium");
  };

  // Смена статуса
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const value: ITodoContext = {
    todos,
    newTodo,
    error,
    priority,
    setError,
    setPriority,
    addTodo,
    toggleTodo,
    setNewTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
