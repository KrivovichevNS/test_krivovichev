import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import getData from "../../../api/api";
import styles from "./Get.module.css";

const Get = (): JSX.Element => {
  const { get } = useParams();
  const context = useContext(AppContext);
  const handleClick = (): void => getData(get, context.setReqData);
  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleClick}>
        {get}
      </Button>
    </div>
  );
};

export default Get;
