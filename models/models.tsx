export interface CryptoModel {
  high: number;
  low: number;
  name: string;
}

export interface RouteProps {
  name: string;
  icon: JSX.Element;
  route: string;
}

export interface CoffeeModel {
  url: string;
  name: string;
  definition: string;
}

export type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;
