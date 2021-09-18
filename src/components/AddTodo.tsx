import React, { VFC } from "react";
import styled from "styled-components";

type Props = {
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onAddTodo: () => void;
};

export const AddTodo: VFC<Props> = (props) => {
  const { onChangeValue, value, onAddTodo } = props;

  return (
    <div>
      <SInputText
        onChange={onChangeValue}
        value={value}
        type="text"
        placeholder="タスク名を入力"
      />
      <SBtn onClick={onAddTodo}>追加</SBtn>
    </div>
  );
};

const SInputText = styled.input`
  padding: 0.25em;
`;

const SBtn = styled.button`
  padding: 0.25em 2em;
  background: #808080;
  border: none;
  margin-left: 16px;
  font-size: 14px;
  color: #fff;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
