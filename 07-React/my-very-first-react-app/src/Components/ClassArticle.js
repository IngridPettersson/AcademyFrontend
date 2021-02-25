import React from 'react';

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

  export default ClassArticle;