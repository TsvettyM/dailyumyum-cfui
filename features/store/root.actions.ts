import { createAction } from "@reduxjs/toolkit";
import { RootActionTypes } from "./root.action-types";

export const resetRootState = createAction(RootActionTypes.RESET_STATE);
