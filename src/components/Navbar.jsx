import React from 'react';

const Navbar = () => {
  // JSX allows embedding HTML-like syntax in JavaScript
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Navbar</h1>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
};

export default Navbar;
