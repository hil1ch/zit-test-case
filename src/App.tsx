import "./App.css";
import { InputField } from "./components/InputField/InputField";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <h1>Список задач</h1>
      <InputField />
      <TodoList />
    </>
  );
}

export default App;
