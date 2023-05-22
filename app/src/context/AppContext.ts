import { createContext } from "react";
import { AppContextType } from '../types/types'

const AppContextState = {
  reqData: [],
  setReqData: () => {},
};

const AppContext = createContext<AppContextType>(AppContextState);

export default AppContext;
