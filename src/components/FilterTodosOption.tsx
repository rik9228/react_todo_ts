import React, { VFC } from "react";

type Props = {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterTodosOption: VFC<Props> = (props) => {
  const { handleFilter } = props;

  return (
    <select onChange={handleFilter}>
      <option value="all">全て</option>
      <option value="running">未完了</option>
      <option value="done">完了済み</option>
    </select>
  );
};
