import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CoffeeIcon from "@mui/icons-material/Coffee";
import Link from "next/link";

import { RouteProps } from "../models/models";

const CustomHeader: React.FC = () => {
  const links: RouteProps[] = [
    {
      name: "Home",
      icon: <HomeIcon style={{ color: "white" }} />,
      route: "/"
    },
    {
      name: "About",
      icon: <InfoIcon style={{ color: "white" }} />,
      route: "/about"
    },
    {
      name: "Crypto",
      icon: <MonetizationOnIcon style={{ color: "white" }} />,
      route: "/crypto"
    },
    {
      name: "Contact",
      icon: <ContactPageIcon style={{ color: "white" }} />,
      route: "/contact"
    },
    {
      name: "Coffee",
      icon: <CoffeeIcon style={{ color: "white" }} />,
      route: "/coffee"
    }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {links.map((link: RouteProps, index: number) => (
          <div key={index} style={{ marginRight: "15px" }}>
            <Link href={link.route}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {link.icon}
                <Typography>{link.name}</Typography>
              </div>
            </Link>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
