import { Todo } from "../util";

export const useChangeTodoState = (todos: Todo[], setTodos: any) => {
  const changeTodoState = (key: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        todo.done = !todo.done;
      }
      todo.editAble = false;
      return todo;
    });
    setTodos(newTodos);
  };
  return { changeTodoState };
};
