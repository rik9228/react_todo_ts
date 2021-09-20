import { useState } from "react";
import { defaultTodos, getKey } from "../util";

type defaultTodosType = typeof defaultTodos;

export const useAddTodos = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<defaultTodosType>(defaultTodos);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddTodo = () => {
    if (value === "") {
      alert("タスク名が入力されていません");
      return;
    }
    setTodos([
      ...todos,
      { key: getKey(), text: value, done: false, editAble: false },
    ]);
    setValue("");
  };

  return { todos, setTodos, value, onAddTodo, onChangeValue };
};
