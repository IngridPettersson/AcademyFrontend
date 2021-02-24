import React from 'react';
import './App.css';

function App() {
const name = "Strumpan's Website";
const today = new Date().toLocaleDateString();
const greeting = "Welcome to"
return (
<div className="App">
<header className="App-header">
<h1>{greeting} {name}!</h1>
</header>
<Article title="I'm learning React!" intro="React is actually very awesome..."/>
<Article title="It's going great!"/>
<Article title="What is React?"/>

<Article date={today} title="Learning React"/>
<Article date={today} title="Learning JSX"/>
<Article date={today} title={"Building " + name}/>
<Article date="8/25/2020" title="Learning JavaScript"/>
<Article date="8/14/2020" title="Learning CSS"/>
<Article date="8/13/2020" title="Learning HTML"/>

<Article date={today}>
  <h3>
  Here goes children.
  </h3>
  <StopWatch />
  <Toggle />
</Article>

<ClassArticle date={today} title="Learning React classes">
  <p>I'm a classy sassy child.</p>
  <StopWatch />
</ClassArticle>

<ClickCounter />

<ParagraphContent />
<p>Today is {today}</p>
</div>
);
}


function Article(props) {
  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <p>{props.intro}</p>
      <p>{props.date}</p>
    <div className="ArticleChildren">
      <p>
      {props.children}

      </p>
    </div>
    </div>
  );
}

class ClassArticle extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      showContent: false
    }
  }
  render() {
    const titleCLicked = () => {
      this.setState({
        showContent: !this.state.showContent
      })
    }

    let childrenElement = null;
    if (this.state.showContent) {
      childrenElement = (
        <div className="ArticleChildren">{this.props.children}</div>
      )
    }

    return (
      <div className="Article">

        <h2 onClick={titleCLicked}>{this.props.title}</h2>
        <p>{this.props.intro}</p>
        <p>{this.props.date}</p>
        {childrenElement}

  
      
    
      </div>
    );
  }

}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class StopWatch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mountTime: new Date().getTime(),
      currentTime: new Date().getTime()
    }
  }
  componentDidMount() {
    this.intervalHandle = setInterval( () => {
      this.setState({
        currentTime: new Date().getTime(),
      })
    }

    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const seconds = (this.state.currentTime - this.state.mountTime) / 1000
    return (
      <div>{seconds.toFixed(1)}</div>
    )
  }

}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props); // Vi ärver props från superklassen, vilket är React.Component i det här fallet.
    this.state = {
      counter: 0
    }
  }

  render() {

  const clickHandler = () => {
  console.log("Button Clicked");
  this.setState({
     counter: this.state.counter + 1
  })

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


function ParagraphContent() {
  const repeated = "I'm on repeat"
  return (
      <p>
        Here I write all my content {repeated} and here and there {repeated} you will find {repeated} a small {repeated} sentence that's on {repeated} 
        repeat {repeated}. Can you {repeated} find it?
      </p>

  );
}


export default App;
