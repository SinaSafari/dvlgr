import { createContext, useCallback, useMemo, useReducer } from "react";
import {
  themeModeReducer,
  langReducer,
  tokenReducer,
} from "@/context/reducers";
import { combineDispatch } from "@/lib/utils/reducers";

export const StateContext = createContext();
export const DispatchContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeModeReducer, {
    theme: "light",
  });

  const [langState, langDispatch] = useReducer(langReducer, {
    lang: "fa",
  });

  const [tokenState, tokenDispatch] = useReducer(tokenReducer, { token: "" });

  const combinedDispatch = useCallback(
    () => combineDispatch(themeDispatch, langDispatch, tokenDispatch),
    [themeDispatch, langDispatch, tokenDispatch]
  );
  const combinedState = useMemo(
    () => ({ themeState, langState, tokenState }),
    [themeState, langState, tokenState]
  );

  return (
    <DispatchContext.Provider value={combinedDispatch}>
      <StateContext.Provider value={combinedState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
