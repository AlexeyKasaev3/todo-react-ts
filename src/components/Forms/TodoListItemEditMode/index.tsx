import React, { useEffect, useRef } from "react";
import { useClickAway } from "react-use";

import styles from "./TodoListItemEditMode.module.scss";

type Props = {
  text: string;
  onClickAway: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const TodoListItemEditModeComponent: React.FC<Props> = ({
  text,
  onClickAway,
  onChange,
  onKeyUp,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useClickAway(inputRef, () => {
    onClickAway();
  });

  useEffect(() => {
    setFocusOnInputAndPlaceCaretToEnd();
  }, []);

  function setFocusOnInputAndPlaceCaretToEnd() {
    const inputElement = inputRef.current;
    const inputValueLength = inputElement!.value.length;
    inputElement!.focus();
    inputElement!.setSelectionRange(inputValueLength, inputValueLength);
  }

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        value={text}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};
