import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";

import { red } from "@mui/material/colors";

import { useEffect } from "react";
import { useRouter } from "next/router";

import Center from "../components/Center";

export default function Custom404() {
  const route = useRouter();

  useEffect(() => {
    console.log("Redirecting...");

    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);

  return (
    <Center>
      <ErrorIcon
        sx={{
          fontSize: 65,
          color: red[600],
          marginTop: "10px",
          marginBottom: "10px"
        }}
      />
      <Typography>
        That page does not exist. Redirecting to home page.
      </Typography>
    </Center>
  );
}
