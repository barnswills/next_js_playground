import { HomeView } from "../components/Home/HomeView";

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <HomeView />
      <HomeView iconSize={75} />
      <HomeView />
    </div>
  );
}
