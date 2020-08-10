import React from "react";
import cn from "classnames";

import { HeaderAreaComponent } from "../Areas";
import { TodoList } from "../ListGroups/TodoList";
import { TodoListFooter } from "../TodoListFooter";

import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import { hasTodosSelector } from "../../actions";

import { IStore } from "../../configureStore";

export function App() {
  const hasTodos = useSelector<IStore, boolean>(hasTodosSelector);
  const appContainerClasses = cn(styles.appContainer, "mx-auto", "pt-30");
  const headerClasses =
    "text-center mb-30 mt-0 font-weight-light fColorHeader fSize100";

  return (
    <div className={appContainerClasses}>
      <h1 className={headerClasses}>todos</h1>
      <div className={styles.appControlWrapper}>
        <HeaderAreaComponent />
        <TodoList />
        {hasTodos ? <TodoListFooter /> : null}
      </div>
    </div>
  );
}
