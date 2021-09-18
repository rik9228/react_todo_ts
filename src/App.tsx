import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { FilterTodosOption } from "./components/FilterTodosOption";
import { Todos } from "./components/Todos";
import { defaultTodos, getKey, Todo } from "./util";

type defaultTodosType = typeof defaultTodos;

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<defaultTodosType>(defaultTodos);
  const [filter, setFilter] = useState<string>("all");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddTodo = (): void => {
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

  const onEditAble = (key: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        todo.editAble = !todo.editAble;
      }
      return todo;
    });
    setTodos(newTodos);
  };

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

  return (
    <div className="App">
      <SContainer>
        <h1>Todoリスト</h1>
        <SMt40 />
        <SRow>
          <AddTodo
            onChangeValue={onChangeValue}
            value={value}
            onAddTodo={onAddTodo}
          />

          <SMt40 />

          <FilterTodosOption handleFilter={handleFilter} />

          <Todos
            todos={filterdTodos()}
            changeTodoState={changeTodoState}
            onEditAble={onEditAble}
          />
        </SRow>
      </SContainer>
    </div>
  );
}

export default App;

const SContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  margin-top: 80px;
`;

const SRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SMt40 = styled.div`
  margin-top: 40px;
`;
