import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export interface ICryptoCardProps {
  price: number;
  icon: JSX.Element;
  title: string;
}

const CryptoCard: React.FC<ICryptoCardProps> = (props: ICryptoCardProps) => {
  const { price, icon, title } = props;

  return (
    <Card
      elevation={3}
      style={{
        minWidth: "175px",
        width: "20%",
        maxWidth: "200px",
        margin: 10,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <>
          <Typography variant="body2">{title}</Typography>
        </>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography fontSize={22}>
            £{(price * 0.73).toFixed(2) || 0}
          </Typography>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
