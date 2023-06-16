// src/App.js

// import Provider from react-redux
import { Provider } from "react-redux";

// import store

import store from "./redux/store";

// import AddTodoForm component
import AddTodoForm from "./components/AddTodoForm";
// import TodoList component
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux</h1>
        <AddTodoForm />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;