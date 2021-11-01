import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CustomHeader from "../components/CustomHeader";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHeader />
      {children}
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Toolbar>
          <Typography color="black">CopyRight 2021</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Layout;
