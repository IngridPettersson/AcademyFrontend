import React from "react";

export function Box(props) {
  const [showContent, setShowContent] = React.useState(false);

  let childrenElement = null;
  if (showContent) {
    childrenElement = <div className="ArticleChildren">{props.children}</div>;
  }

  return (
    <div className="Article">
      <button onClick={() => setShowContent(!showContent)}>Show content</button>
      <h2>{props.breed}</h2>

      {childrenElement}
    </div>
  );
}


