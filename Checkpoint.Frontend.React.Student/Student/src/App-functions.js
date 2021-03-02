import React, {useState} from "react";
import "./App.css";

function App() {
  const headingText = "Academy React News Bulletin";
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
            
      <header className="App-header">
        <h1>{headingText}</h1>
        <p>Today is {today}</p>
      </header>
      <News
        title="React is the best!"
        preamble="Lorem ipsum dolor..."
        date={today}
      />
      <News title="News with children" date="2020-03-01">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Vestibulum pretium sapien sit amet dui feugiat, nec tempus leo
          aliquam.
        </p>
        <p>Donec mattis lorem nec ante maximus, nec suscipit lacus rutrum.</p>
      </News>
    </div>
  );
}

// ---------------------------------
// CHECKPOINT
// ---------------------------------

function News(props) {
  const [showChildren, setShowChildren] = useState(false);
  const [counter, setCounter] = useState(0)
  const clickHandler = () => {
    if (!showChildren) {
      setCounter(counter + 1)
    }
  }


  let children = null
  if (showChildren) {
    children = <p className="NewsChildren">{props.children}</p>
  }


  return (
    <div className="News">
      <h2 onClick={() => {setShowChildren(!showChildren); clickHandler();}} >{props.title}</h2>
      <p>
        <em>{props.date}</em>
      </p>
      <p><strong>Views: {counter}</strong></p>
      {children}
    </div>
  );
}

export default App;
