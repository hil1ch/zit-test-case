import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
  useMemo,
} from "react";
import { type ITodo, type Priority } from "../components/TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

export type Filter = "Все" | "Завершенные";

interface ITodoContext {
  todos: ITodo[];
  filteredTodos: ITodo[];
  newTodo: string;
  priority: Priority;
  error: boolean;
  filter: Filter;
  setError: (error: boolean) => void;
  setPriority: (priority: Priority) => void;
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: Filter) => void;
  setNewTodo: (newTodo: string) => void;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [filter, setFilter] = useState<Filter>("Все");
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

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Фильтрация todos
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Завершенные":
        return todos.filter(todo => todo.completed);
      case "Все":
      default:
        return todos;
    }
  }, [todos, filter]);

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
    filteredTodos,
    filter,
    newTodo,
    error,
    priority,
    setError,
    setPriority,
    addTodo,
    deleteTodo,
    setFilter,
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
