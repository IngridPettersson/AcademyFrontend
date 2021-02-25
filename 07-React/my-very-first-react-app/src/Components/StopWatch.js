import React from 'react';

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

  export default StopWatch;