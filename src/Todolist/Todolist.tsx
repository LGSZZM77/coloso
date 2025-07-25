import { useState, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  key: string;
  todoText: string;
  isCompleted: boolean;
}

const Todolist = () => {
  const [inputValue, setinputValue] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([
    { key: uuidv4(), todoText: "게임하기", isCompleted: false },
    { key: uuidv4(), todoText: "잠자기", isCompleted: false },
    { key: uuidv4(), todoText: "코딩하기", isCompleted: false },
  ]);

  return (
    <main className="container">
      <h1>해야할 일</h1>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (inputValue !== "") {
            setTodoList([...todoList, { key: uuidv4(), todoText: inputValue, isCompleted: false }]);
            setinputValue("");
          }
        }}
      >
        <fieldset role="group">
          <input
            type="text"
            name="text"
            value={inputValue}
            onChange={(e) => {
              setinputValue(e.target.value);
            }}
            placeholder="해야할 일을 적어주세요."
          />
          <input type="submit" value="추가" />
        </fieldset>
      </form>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li
              style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
              key={index}
              onClick={() => {
                const updateTodoList = todoList.map((innerTodo) => {
                  return innerTodo.key === todo.key ? { ...innerTodo, isCompleted: !todo.isCompleted } : innerTodo;
                });
                setTodoList(updateTodoList);
              }}
            >
              {todo.todoText}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Todolist;
