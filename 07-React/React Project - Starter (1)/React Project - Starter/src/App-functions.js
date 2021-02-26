import React from "react";
import "./App.css";
import { Box } from "./Box";
import { DogInfo } from "./DogInfo";
import dogs from "./Dogs";
import { ShowDog } from "./ShowDog";

export function App() {
  const name = "TEAM WEEKEND";
  const greeting = "This is";
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
            
      <header className="App-header">
        <h1>
          {greeting} {name}
        </h1>
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
            <p>Today is {today}</p>
          
    </div>
  );
}

export default App;
