import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import CryptoCard from "../components/CryptoCard";

import { CryptoModel } from "../models/models";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res: Response = await fetch(
    "https://api.kucoin.com/api/v1/market/stats?symbol=MANA-USDT"
  );

  const result = await res.json();

  let cryptoData: CryptoModel = {
    high: result ? result["data"].high : 0,
    low: result ? result["data"].low : 0,
    name: result ? result["data"].symbol.split("-")[0] : ""
  };

  return {
    props: { cryptoData } // will be passed to the page component as props
  };
};

interface ICryptoProps {
  cryptoData: CryptoModel;
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
      <Typography>Info for {cryptoData.name}</Typography>
      <div
        style={{
          margin: 10,
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CryptoCard
          title="High"
          price={cryptoData.high}
          icon={<ArrowUpwardIcon style={{ color: "green" }} />}
        />
        <CryptoCard
          title="Low"
          price={cryptoData.low}
          icon={<ArrowDownwardIcon style={{ color: "red" }} />}
        />
      </div>
    </div>
  );
};

export default Crypto;
