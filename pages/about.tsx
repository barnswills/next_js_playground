import Typography from "@mui/material/Typography";

interface IAboutPageProps {
  extras: string;
}

export default function AboutPage(props: IAboutPageProps): JSX.Element {
  const x: number[] = Array.from(Array(50).keys());

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {x.map((n) => (
        <Typography key={n}>{n}</Typography>
      ))}
    </div>
  );
}
