import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import CryptoCard from "../components/CryptoCard";

export async function getStaticProps(context) {
  const res = await fetch(
    "https://api.kucoin.com/api/v1/market/stats?symbol=MANA-USDT"
  );

  const result = await res.json();
  console.log(result);

  let cryptoData = {
    high: result ? result["data"].high : "$0",
    low: result ? result["data"].low : "$0",
    name: result ? result["data"].symbol.split("-")[0] : ""
  };

  console.log(cryptoData);

  return {
    props: { cryptoData } // will be passed to the page component as props
  };
}

const Crypto = ({ cryptoData }) => {
  useEffect(() => {
    console.log("mounted", cryptoData);
  }, []);

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
