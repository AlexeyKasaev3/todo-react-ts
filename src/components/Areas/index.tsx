import React from "react";

import { ArrowToggleTodos } from "../ArrowToggleTodos";
import { AddTodoInput } from "../Forms/AddTodoInput";

import styles from "./HeaderArea.module.scss";

export function HeaderAreaComponent() {
    return (
        <div className={styles.headerArea}>
            <div className={styles.arrowSelectorContainer}>
                <ArrowToggleTodos />
            </div>
            <div className={styles.addTodoInputContainer}>
                <AddTodoInput />
            </div>
        </div>
    );
}
