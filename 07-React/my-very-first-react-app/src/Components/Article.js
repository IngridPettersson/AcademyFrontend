import React from 'react';


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

  export default Article;