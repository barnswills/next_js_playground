import Typography from "@mui/material/Typography";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const route = useRouter();

  useEffect(() => {
    console.log("Redirecting...");

    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);

  return (
    <Typography>That page does not exist. Redirecting to home page.</Typography>
  );
}
