import React from 'react';

const Issues = () => {
  // JSX allows embedding HTML-like syntax in JavaScript
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, React with JSX!</h1>
      <p>JSX makes it easy to write and manage UI components.</p>
      <p>hello</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
};

export default Issues;