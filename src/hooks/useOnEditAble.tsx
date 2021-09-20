import { Todo } from "../util";

export const useOnEditAble = (todos: Todo[], setTodos: any) => {
  const onEditAble = (key: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        todo.editAble = !todo.editAble;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return { onEditAble };
};
