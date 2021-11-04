import ImageCard from "../components/ImageCard";

import Grid from "@mui/material/Grid";

import { CoffeeModel } from "../models/models";

export default function CoffeePage(): JSX.Element {
  const coffees: CoffeeModel[] = [
    {
      name: "Americano",
      url:
        "https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      definition: "a drink of espresso coffee diluted with hot water"
    },
    {
      name: "Latte",
      url:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      definition:
        "a type of coffee made with espresso and hot steamed milk, milkier than a cappuccino."
    },
    {
      name: "Cappuccino",
      url:
        "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      definition:
        "a type of coffee made with espresso and milk that has been frothed up with pressurized steam"
    },
    {
      name: "Cold Brew",
      url:
        "https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      definition: "Coffee brewed using room-temperature or cold water"
    }
  ];

  return (
    <div
      style={{
        padding: 25
      }}
    >
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        {coffees.map((coffee: CoffeeModel, index: number) => (
          <ImageCard
            key={index}
            name={coffee.name}
            details={coffee.definition}
            url={coffee.url}
          />
        ))}
      </Grid>
    </div>
  );
}
