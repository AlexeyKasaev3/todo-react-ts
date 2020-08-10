import React from "react";
import cn from "classnames";

import styles from "./TodoListItemDefault.module.scss";

type Props = {
  text: string;
  isComplete: boolean;
  onDeleteHandler: () => void;
  onCompleteStatusChangeHandler: () => void;
  onDoubleClickHandler: () => void;
};

export const TodoListItemDefaultComponent: React.FC<Props> = ({
  text,
  isComplete,
  onDeleteHandler,
  onCompleteStatusChangeHandler,
  onDoubleClickHandler,
}) => {
  function isDoubleClickOnDiv(event: React.MouseEvent<HTMLDivElement>) {
    return event.currentTarget.tagName === "DIV";
  }

  return (
    <div
      className={cn(styles.todoItem, { [styles.completed]: isComplete })}
      onDoubleClick={(event) => {
        isDoubleClickOnDiv(event) && onDoubleClickHandler();
      }}
    >
      {text}
      <button
        className={styles.toggleTodoButton}
        onClick={onCompleteStatusChangeHandler}
      />
      <button className={styles.deleteButon} onClick={onDeleteHandler} />
    </div>
  );
};
