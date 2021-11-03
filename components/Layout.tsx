import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CustomHeader from "../components/CustomHeader";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <div>
      <CustomHeader />
      {props.children}
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Toolbar>
          <Typography color="black">CopyRight 2021</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
