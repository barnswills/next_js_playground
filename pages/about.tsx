import Typography from "@mui/material/Typography";

interface IAboutPageProps {
  extras: string;
}

export default function AboutPage(props: IAboutPageProps) {
  return <Typography>About us {props.extras ?? "."} </Typography>;
}
