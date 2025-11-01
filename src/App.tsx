import "./App.css";
import { InputField } from "./components/InputField/InputField";
import { TodoList } from "./components/TodoList/TodoList";
import { Filter } from "./components/Filter/Filter";

function App() {
  return (
    <>
      <h1 style={{margin: "0 0 25px 0"}}>Список задач</h1>
      <InputField />
      <Filter />
      <TodoList />
    </>
  );
}

export default App;
