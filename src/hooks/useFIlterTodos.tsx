import { useState } from "react";
import { Todo } from "../util";

export const useFilterTodos = (todos: Todo[]) => {
  const [filter, setFilter] = useState<string>("all");
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filterLabel = e.target.value;
    setFilter(filterLabel);
  };

  const filterdTodos = (): Todo[] => {
    if (filter === "done") {
      return todos.filter((todo) => todo.done === true);
    } else if (filter === "running") {
      return todos.filter((todo) => todo.done === false);
    } else {
      return todos.filter((todo) => todo.done === true || todo.done === false);
    }
  };

  return { filterdTodos, handleFilter };
};
