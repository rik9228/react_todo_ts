import React, { memo, VFC } from "react"; //コンポーネントの不要な際レンダリングを防ぐ
import styled from "styled-components";
import { Todo } from "../util";

type Props = {
  todos: Todo[];
  changeTodoState: (key: string) => void;
  onEditAble: (key: string) => void;
};

export const Todos: VFC<Props> = (props) => {
  const { todos, changeTodoState, onEditAble } = props;

  return (
    <SInner>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <SLi key={todo.key}>
              <SBox>
                <span>ID：{todo.key}</span>
                <span>
                  <SInput
                    defaultValue={todo.text}
                    readOnly={!todo.editAble ? true : false}
                    className={todo.done ? "done" : ""}
                  />
                </span>
              </SBox>
              <SEditBtn
                onClick={() => onEditAble(todo.key)}
                disabled={todo.done ? true : false}
              >
                {!todo.editAble ? "編集" : "確定"}
              </SEditBtn>
              <SCompletedBtn onClick={() => changeTodoState(todo.key)}>
                {todo.done ? "戻す" : "完了"}
              </SCompletedBtn>
            </SLi>
          ))}
        </ul>
      ) : (
        <p>タスクがありません。</p>
      )}
    </SInner>
  );
};

const SInner = styled.div`
  margin-top: 40px;
`;

const SBtn = styled.button`
  padding: 0.25em 1em;
  display: inline-block;
  margin-left: 16px;
  color: #fff;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SEditBtn = styled(SBtn)`
  background: gray;
  :disabled {
    opacity: 0.4;
  }
`;

const SCompletedBtn = styled(SBtn)`
  background: teal;
`;

const SLi = styled.li`
  display: flex;
  span {
    min-width: 160px;
    display: inline-block;
  }

  span:not(:first-of-type) {
    margin-left: 16px;
  }

  span.isComplete {
    opacity: 0.4;
  }
  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

const SBox = styled.div`
  min-width: 440px;
`;

const SInput = styled.input`
  padding: 0.25em;
  :read-only {
    border: none;
    outline: none;
  }

  &.done {
    text-decoration: line-through;
  }
`;
