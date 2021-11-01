import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Link from "next/link";

const CustomHeader = () => {
  const links = [
    {
      name: "home",
      icon: <HomeIcon style={{ color: "white" }} />,
      route: "/"
    },
    {
      name: "about",
      icon: <InfoIcon style={{ color: "white" }} />,
      route: "/about"
    },
    {
      name: "contact",
      icon: <ContactPageIcon style={{ color: "white" }} />,
      route: "/contact"
    }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {links.map((link) => (
          <div style={{ marginRight: "10px" }}>
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
