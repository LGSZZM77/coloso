// App.tsx
import { Routes, Route } from "react-router-dom";
import TodoList from "./Todolist/Todolist";
import TicTacToe from "./TicTacToe/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/tic" element={<TicTacToe />} />
    </Routes>
  );
};

export default App;
