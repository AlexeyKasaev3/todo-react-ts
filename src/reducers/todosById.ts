import {
  addNewTodoAction,
  toggleTodoCompleteStatusAction,
  deleteTodoAction,
  setAllTodosAsCompletedAction,
  setAllTodosAsNotCompletedAction,
  deleteAllCompletedTodos,
  editTodoTextAction,
} from "../actions";

interface IAction {
  type: string;
  payload?: any;
}

export function todosById(state: ITodosById = {}, action: IAction): ITodosById {
  switch (action.type) {
    case addNewTodoAction.toString(): {
      const newTodo: ITodo = action.payload;
      return { ...state, [newTodo.id]: newTodo };
    }
    case toggleTodoCompleteStatusAction.toString():
      const todoId: string = action.payload;
      return {
        ...state,
        [todoId]: {
          ...state[todoId],
          isComplete: !state[todoId]!.isComplete,
        },
      };
    case deleteTodoAction.toString(): {
      const newState: ITodosById = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case setAllTodosAsCompletedAction.toString(): {
      const newState: ITodosById = {};
      Object.keys(state).forEach(
        (key) => (newState[key] = { ...state[key], isComplete: true })
      );
      return newState;
    }
    case setAllTodosAsNotCompletedAction.toString(): {
      const newState: ITodosById = {};
      Object.keys(state).forEach(
        (key) => (newState[key] = { ...state[key], isComplete: false })
      );
      return newState;
    }
    case deleteAllCompletedTodos.toString(): {
      const newState: ITodosById = {};
      Object.keys(state).forEach((key) => {
        if (!state[key].isComplete) {
          newState[key] = state[key];
        }
      });
      return newState;
    }
    case editTodoTextAction.toString(): {
      const todoId: string = action.payload.id;
      const newTodoText = action.payload.todoText;
      return {
        ...state,
        [todoId]: { ...state[todoId], text: newTodoText },
      };
    }
    default:
      return state;
  }
}

export interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
}

export interface ITodosById {
  [todosById: string]: ITodo;
}

export interface IAddTodoPayload {
  payload: ITodo;
}
