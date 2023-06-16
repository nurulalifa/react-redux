// / src/components/TodoList.jsx

import { useSelector } from "react-redux";

// import TodoItem component
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h2>Todo List</h2>

      <p> Total todos: {todos.length} </p>
      <div>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              deadline={todo.deadline}
              status={todo.status}
            />
          ))}
      </div>
    </div>
  );
}

export default TodoList;