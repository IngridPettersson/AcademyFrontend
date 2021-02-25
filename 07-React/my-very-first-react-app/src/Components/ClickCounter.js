import React from 'react';

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

    export default ClickCounter;