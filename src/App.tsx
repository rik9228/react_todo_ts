import React from "react";
import styled from "styled-components";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { FilterTodosOption } from "./components/FilterTodosOption";
import { Todos } from "./components/Todos";
import { useAddTodos } from "./hooks/useAddTodos";
import { useOnEditAble } from "./hooks/useOnEditAble";
import { useChangeTodoState } from "./hooks/useChangeTodoState";
import { useFilterTodos } from "./hooks/useFIlterTodos";

function App() {
  const { todos, setTodos, value, onAddTodo, onChangeValue } = useAddTodos();
  const { onEditAble } = useOnEditAble(todos, setTodos);
  const { changeTodoState } = useChangeTodoState(todos, setTodos);
  const { filterdTodos, handleFilter } = useFilterTodos(todos);

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
