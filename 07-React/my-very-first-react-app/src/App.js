import React from 'react';
import './App.css';
import Article from './Components/Article';
import ClassArticle from './Components/ClassArticle';
import Toggle from './Components/Toggle';
import StopWatch from './Components/StopWatch';
import ClickCounter from './Components/ClickCounter';
import ParagraphContent from './Components/ParagraphContent';

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

export default App;
