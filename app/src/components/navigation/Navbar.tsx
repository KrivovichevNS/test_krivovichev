import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/system";

const Navbar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AdbIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button sx={{ color: "white" }}>Home</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link style={{ textDecoration: "none" }} to="/get">
            <Button sx={{ color: "white" }}>GET</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/post">
            <Button sx={{ color: "white" }}>POST</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/delete">
            <Button sx={{ color: "white" }}>DELETE</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
