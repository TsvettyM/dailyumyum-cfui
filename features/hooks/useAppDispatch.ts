import store from "../store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export default useAppDispatch;
