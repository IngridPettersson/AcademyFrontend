import React from "react";
import "./App.css";
import { Box } from "./Box";
import { DogInfo } from "./DogInfo";
import dogs from "./Dogs";
import { ShowDog } from "./ShowDog";

export function App() {
  const greeting = "This is";
  const name = "TEAM WEEKEND";
  const middleHeading = "PRESENTING";
  const subHeading = "a very unreliable and extraordinarily pinkish dog page";
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
            
      <header className="App-header">
        <h3>
          {greeting} {name}
        </h3>
        <h2>{middleHeading}</h2>
        <h1>{subHeading}</h1>
      </header>
      <Box>
        <DogInfo dog={dogs[0]} />
        <ShowDog dogName={dogs[0].name} />
        <DogInfo dog={dogs[1]} />
        <ShowDog dogName={dogs[1].name} />
        <DogInfo dog={dogs[2]} />
        <ShowDog dogName={dogs[2].name} />
        <DogInfo dog={dogs[3]} />
        <ShowDog dogName={dogs[3].name} />
        <DogInfo dog={dogs[4]} />
        <ShowDog dogName={dogs[4].name} />
        <DogInfo dog={dogs[5]} />
        <ShowDog dogName={dogs[5].name} />
      </Box>

            <h2>- What day is it again?</h2>
      <p>
        {today}
        </p>
          
    </div>
  );
}

export default App;
