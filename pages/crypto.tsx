import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RemoveIcon from "@mui/icons-material/Remove";
import { red, green, grey } from "@mui/material/colors";

import CryptoCard from "../components/CryptoCard";

import { CryptoModel } from "../models/models";
import { GetStaticProps } from "next";

const makeCryptoRequest: Function = async (
  currency: string
): Promise<CryptoModel> => {
  const res: Response = await fetch(
    `https://api.kucoin.com/api/v1/market/stats?symbol=${currency}-USDT`
  );

  const result = await res.json();

  let cryptoData: CryptoModel = {
    high: result ? result["data"].high : 0,
    low: result ? result["data"].low : 0,
    name: result ? result["data"].symbol.split("-")[0] : ""
  };

  return cryptoData;
};

export const getStaticProps: GetStaticProps = async () => {
  const cryptoCurrencies: string[] = [
    "ADA",
    "XTZ",
    "MANA",
    "MKR",
    "BTC",
    "ETH"
  ];

  const getCryptoData: Function = async (): Promise<CryptoModel[]> => {
    const promises: Promise<CryptoModel>[] = cryptoCurrencies.map(
      async (currency: string) => await makeCryptoRequest(currency)
    );
    const results: CryptoModel[] = await Promise.all(promises);
    return results;
  };

  const results = await getCryptoData();

  return { props: { cryptoData: results } };
};

interface ICryptoProps {
  cryptoData: CryptoModel[];
}

const Crypto: React.FC<ICryptoProps> = (props: ICryptoProps) => {
  const { cryptoData } = props;

  return (
    <div
      style={{
        margin: 10,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {cryptoData.map((crypto: CryptoModel, index: number) => (
        <div key={index}>
          <Typography align="center">Info for {crypto.name}</Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CryptoCard
              title="High"
              price={crypto.high}
              icon={<ArrowUpwardIcon style={{ color: green[500] }} />}
            />
            <CryptoCard
              title="Average"
              price={(Number(crypto.high) + Number(crypto.low)) / 2}
              icon={<RemoveIcon style={{ color: grey[500] }} />}
            />
            <CryptoCard
              title="Low"
              price={crypto.low}
              icon={<ArrowDownwardIcon style={{ color: red[500] }} />}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crypto;
