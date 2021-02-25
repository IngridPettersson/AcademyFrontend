import React from 'react';
import './App.css';

class ClickCounter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // ...

  render() {
    const clickHandler = () => {
      console.log("Button Clicked");
      
      this.setState({
        counter: this.state.counter + 1,
      });
    }

    console.log("Rendering...")
    return <div>
      <button onClick={clickHandler}>
        Click me!
      </button>
      You have clicked {this.state.counter} times.
    </div>
  }
}

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  render() {

    const titleClicked = () => {
      this.setState({
        showContent: !this.state.showContent,
      });
    }

    let childrenElement = null;
    if(this.state.showContent) {
      childrenElement = <div className="ArticleChildren">
        {this.props.children}
      </div>;
    }

    return (
      <div className="Article">
        <h2 onClick={titleClicked}>{this.props.title}</h2>
        <p>On {this.props.date}</p>
        { childrenElement }
      </div>
    );
  }
}

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: new Date().getTime(),
      currentTime: new Date().getTime(),
    };
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime(),
      });
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const seconds = (this.state.currentTime - this.state.mountTime) / 1000;
    return <p>I've been mounted for <strong>{seconds.toFixed(1)}</strong> seconds.</p>
  }
}

function App() {

  const name = "Philip's Website";
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to {name}!</h1>
      </header>
      <p>Today is {today}</p>
      <StopWatch/>
      <ClickCounter/>
      <Article date={today} title="Learning React">
        <ul>
          <li>Understanding Components</li>
          <li>Understanding Props</li>
        </ul>
      </Article>
      <Article date={today} title="Learning JSX">
        It is translated to regular JavaScript.
      </Article>
      <Article date={today} title={"Building " + name}>
        <ol>
          <li><code>create-react-app</code></li>
          <li>Modify App Component</li>
          <li>Create my first functional Component</li>
          <li>Adding Props</li>
          <li>Adding Children</li>
        </ol>
      </Article>
      <Article date="8/25/2020" title="Learning JavaScript">
        <StopWatch/>
      </Article>
      <Article date="8/14/2020" title="Learning CSS"/>
      <Article date="8/13/2020" title="Learning HTML"/>
    </div>
  );
}

export default App;
