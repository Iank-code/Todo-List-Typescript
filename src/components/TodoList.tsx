import "./styles.css";
import { Todo } from "../Model.js";
import SingleTodo from "./SingleTodo.js";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodo todo={todo} key={index} todos={todos} setTodos={setTodos}/>
        // <li key={index}>{todo.todo}</li>
      ))}
    </div>
  );
}
