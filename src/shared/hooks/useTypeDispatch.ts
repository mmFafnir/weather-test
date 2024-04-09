import { useDispatch } from "react-redux";
import { AppDispatch } from "../types/type.redux";

export const useTypeDispatch = () => useDispatch<AppDispatch>();
