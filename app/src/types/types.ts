export type reqDate = {
    id: number;
    url: string;
    time: string;
  };
  
  export type AppContextType = {
    reqData: reqDate[];
    setReqData: React.Dispatch<React.SetStateAction<never[]>>;
  };