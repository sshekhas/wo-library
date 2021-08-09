/* A react context provider, that make basic authentication related state available to children */
import { createContext, memo, useReducer } from "react";
import reducer, { init, initialState } from "./reducer";

export const AuthContext = createContext();

const SampleProvider = memo(({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      ...initialState,
      // add any props dependent values
    },
    init
  );
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
});

export default SampleProvider;
