import HomeState from "./Home";
import { red, pink } from "@mui/material/colors";

export const incrementClick: Function = (homeState: HomeState): HomeState => {
  return {
    clickCount: homeState.clickCount + 1,
    color: (homeState.clickCount + 1) % 2 === 0 ? red[500] : pink[500]
  };
};

export const decrementClick: Function = (homeState: HomeState): HomeState => {
  return {
    clickCount: homeState.clickCount - 1,
    color: (homeState.clickCount - 1) % 2 === 0 ? red[500] : pink[500]
  };
};
