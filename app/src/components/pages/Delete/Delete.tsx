import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import getData from "../../../api/api";
import styles from "./Delete.module.css";

const Delete = (): JSX.Element => {
  const { del } = useParams();
  const context = useContext(AppContext);
  const handleClick = (): void => getData(del, context.setReqData);
  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleClick}>
        {del}
      </Button>
    </div>
  );
};

export default Delete;
