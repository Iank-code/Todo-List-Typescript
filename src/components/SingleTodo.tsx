import React from "react";
import { Todo } from "../Model.js";
import { FiEdit } from "react-icons/fi";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>

      <div>
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </form>
  );
};

export default SingleTodo;
