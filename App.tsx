import React, { useCallback } from 'react';
import './style.css';

function App() {
  const test = useCallback(() => {
    console.log('lllll');
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <p>Test</p>
      {test()}
    </div>
  );
}

export default App;
