import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../types/type.redux";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
