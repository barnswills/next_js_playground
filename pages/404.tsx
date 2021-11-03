import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";

import { red } from "@mui/material/colors";

import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";

import Center from "../components/Center";

export default function Custom404(): JSX.Element {
  const route: NextRouter = useRouter();

  const timedRedirect: Function = () => {
    const secondsUntilRedirect: number = 3;
    setTimeout(() => {
      route.push("/");
    }, secondsUntilRedirect * 1000);
  };

  useEffect(() => {
    console.log("Redirecting...");

    timedRedirect();
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
