import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import getData from "../../../api/api";
import styles from "./Post.module.css";

const Post = (): JSX.Element => {
  const { post } = useParams();
  const context = useContext(AppContext);
  const handleClick = (): void => getData(post, context.setReqData);
  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>{post}</Button>
    </div>
  );
};

export default Post;
