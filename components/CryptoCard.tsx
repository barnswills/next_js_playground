import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";

import { cardStyle, cardContentBody } from "../styles/CryptoCard.style";

export interface ICryptoCardProps {
  price: number;
  icon: JSX.Element;
  title: string;
}

const CryptoCard: React.FC<ICryptoCardProps> = (props: ICryptoCardProps) => {
  const { price, icon, title } = props;

  const defaultExchangeRate: number = 0.73;

  const [gbpRate, setGbpRate] = useState<number>(defaultExchangeRate);

  const getLatestExchangeRates: Function = async (): Promise<void> => {
    const response: Response = await fetch(
      "https://open.er-api.com/v6/latest/USD"
    );
    const result = await response.json();

    if (result.result !== "error") {
      setGbpRate(result.rates["GBP"] || defaultExchangeRate);
    }
  };

  useEffect(() => {
    getLatestExchangeRates();
  }, []);

  return (
    <Card elevation={5} style={cardStyle}>
      <CardContent style={{ width: "100%" }}>
        <>
          <Typography variant="body2">{title}</Typography>
        </>
        <div style={cardContentBody}>
          <Typography fontSize={22}>
            £{(price * gbpRate).toFixed(2) || 0}
          </Typography>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
