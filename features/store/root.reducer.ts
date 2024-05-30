import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IApplicationState } from "./interfaces/root-state.interface";
import { RootActionTypes } from "./root.action-types";

const appReducer = combineReducers<IApplicationState>({});

const rootReducer: Parameters<typeof configureStore>[number]["reducer"] = (
  state: IApplicationState,
  action
) => {
  if (action.type === RootActionTypes.RESET_STATE) {
    const initialApplicationState: IApplicationState = {};

    return appReducer(initialApplicationState, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
