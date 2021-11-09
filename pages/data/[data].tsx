import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IDataProps {}

const Data: React.FC<IDataProps> = (_: IDataProps) => {
  const route: NextRouter = useRouter();

  const { data }: ParsedUrlQuery = route.query;

  return <h3>Route: {data}</h3>;
};

export default Data;
