import HomeState from "./Home";

export const incrementClick: Function = (homeState: HomeState): HomeState => {
  return {
    clickCount: homeState.clickCount + 1,
    color: (homeState.clickCount + 1) % 2 === 0 ? "red" : "pink"
  };
};

export const decrementClick: Function = (homeState: HomeState): HomeState => {
  return {
    clickCount: homeState.clickCount - 1,
    color: (homeState.clickCount - 1) % 2 === 0 ? "red" : "pink"
  };
};
