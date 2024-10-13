import { useReducer } from "react";

const initialTodos = [
  { id: 0, title: "Todo 1", isCompleted: false },
  { id: 1, title: "Todo 2", isCompleted: false },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "complete":
      return state.map((todo) => {
        if (action.id === todo.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
const Todos = () => {
  const [todos, setTodos] = useReducer(reducer, initialTodos);

  const handleTodoChange = (id) => {
    setTodos({ type: "complate", id });
  };
  return todos.map((todo) => {
    <div key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleTodoChange(todo.id)}
        />
        {todo.title}
      </label>
    </div>;
  });
};

export default Todos;
