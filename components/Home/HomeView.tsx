import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

import { red } from "@mui/material/colors";

import { useState } from "react";
import HomeState from "./Home";
import { incrementClick, decrementClick } from "./HomeController";

interface IHomeViewProps {
  iconSize?: number;
}

export const HomeView: React.FC<IHomeViewProps> = (props: IHomeViewProps) => {
  const [homeState, updateHomeState] = useState<HomeState>({
    clickCount: 0,
    color: red[500]
  });

  return (
    <div>
      <HomeIcon
        onClick={() => updateHomeState(incrementClick(homeState))}
        style={{ fontSize: props.iconSize | 50, color: homeState.color }}
      />
      <Typography
        onClick={() =>
          homeState.clickCount !== 0
            ? updateHomeState(decrementClick(homeState))
            : null
        }
      >
        {homeState.clickCount}
      </Typography>
    </div>
  );
};
