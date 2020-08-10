import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCompletedTodos } from "../../actions";
import styles from "./TodoListFooter.module.scss";
import { NavLink } from "react-router-dom";
import { IStore } from "../../configureStore";

export function TodoListFooter() {
  const state = useSelector<IStore, IStore>((state) => state);
  const dispatch = useDispatch();

  const [uncompletedItemsNum, setUncompletedItemsNum] = useState<number | null>(
    null
  );
  const [isClearButtonShown, setIsClearButtonShown] = useState<boolean>(false);

  useEffect(() => {
    setUncompletedItemsNum(
      Object.keys(state.todosById).filter(
        (key) => !state.todosById[key].isComplete
      ).length
    );
    if (
      Object.keys(state.todosById).filter(
        (key) => state.todosById[key].isComplete
      ).length
    ) {
      setIsClearButtonShown(true);
    } else {
      setIsClearButtonShown(false);
    }
  }, [state]);

  function onClearButtonClick() {
    dispatch(deleteAllCompletedTodos());
  }

  return (
    <div className={styles.root}>
      <div className={styles.itemsLeft}>
        {uncompletedItemsNum} item{uncompletedItemsNum === 1 ? "" : "s"} left
      </div>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" activeClassName={styles.active} exact>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName={styles.active}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName={styles.active}>
            Completed
          </NavLink>
        </li>
      </ul>
      {isClearButtonShown ? (
        <button className={styles.clearButton} onClick={onClearButtonClick}>
          Clear completed
        </button>
      ) : null}
    </div>
  );
}
