// App.tsx
import React, { useState } from 'react';
import '../styles/ui.css';

function App() {
  const [values, setValues] = useState('1, 3, 10, 28, 41, 87, 100, 114, 94, 68, 50, 23, 9, 3, 1');
  const [error, setError] = useState('');

  const createBarChart = () => {
    const text = values;

    let numbers = text.split(',').map(x => +x);
    if (numbers.length < 2) {
      showError('Error: Must have at least two values');
      return;
    }
    if (numbers.some(x => isNaN(x))) {
      showError('Error: All values must be numbers');
      return;
    }

    parent.postMessage({ pluginMessage: numbers }, '*');
  };

  const showError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div>
      <h2>Bar Chart Sample</h2>
      <p>
        Values:
        <input value={values} onChange={(e) => setValues(e.target.value)} />
      </p>
      <b>{error}</b>
      <p>
        <button onClick={createBarChart}>Create Bar Chart</button>
      </p>
    </div>
  );
}

export default App;
