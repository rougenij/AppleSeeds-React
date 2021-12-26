import React from "react";
const { useState } = React;

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>;
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        {content}
        <button onClick={showLess}>Read less</button>
      </div>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return (
    <div>
      {toShow}
      <button onClick={showMore}>Read more</button>
    </div>
  );
};

const App = () => (
  <div>
    <LongText
      content="Hello this is a very very very very very very very very very very very very very very very very very very very very very very very very veryvery very very very very long text"
      limit={50}
    />
  </div>
);

export default App;
