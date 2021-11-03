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
        width: "125px",
        margin: 10,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <div>
          <Typography variant="body2">{title}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <Typography variant="h6">
            £{(price * 0.73).toFixed(2) || 0}
          </Typography>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
