export const getKey: () => string = () =>
  Math.random().toString(32).substring(2);

export type Todo = {
  key: string;
  text: string;
  done: boolean;
  editAble: boolean;
};

export const defaultTodos: Todo[] = [
  { key: getKey(), text: "Learn JavaScript", done: false, editAble: false },
  { key: getKey(), text: "Learn PHP", done: false, editAble: false },
  { key: getKey(), text: "Learn Swift", done: false, editAble: false },
];
