import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { todosByFilterSelector } from "../../../actions";
import { TodoListItem } from "../TodoListItem";

import { IStore } from "../../../configureStore";
import { TFilterValues } from "../../../actions/actions";

export function TodoList() {
  const state = useSelector<IStore, IStore>((state) => state);
  const todoFilterValue = getFilterValueFromUrlParams(useParams());
  const filteredTodos = todosByFilterSelector(state, todoFilterValue);
  return filteredTodos ? (
    <>
      {Object.values(filteredTodos).map((todo) => {
        return <TodoListItem {...todo} key={todo.id} />;
      })}
    </>
  ) : null;
}

function getFilterValueFromUrlParams(reactRouterParams: any): TFilterValues {
  if (reactRouterParams.filter) {
    return reactRouterParams.filter;
  }
  return "all";
}
