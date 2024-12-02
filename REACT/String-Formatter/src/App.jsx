import React, { useState } from 'react';
import './index.css'

function App() {
  const [inputString, setInputString] = useState('');
  const [transformedString, setTransformedString] = useState('');

  // Helper functions to transform string cases
  const toLowerCase = (str) => str.toLowerCase();
  const toUpperCase = (str) => str.toUpperCase();
  const toCamelCase = (str) => {
    return str
      .split(' ')
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  };
  const toPascalCase = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  };
  const toSnakeCase = (str) => str.split(' ').join('_').toLowerCase();
  const toKebabCase = (str) => str.split(' ').join('-').toLowerCase();
  const trimString = (str) => str.trim();

  const handleTransform = (transformType) => {
    let result = '';
    switch (transformType) {
      case 'lower':
        result = toLowerCase(inputString);
        break;
      case 'upper':
        result = toUpperCase(inputString);
        break;
      case 'camel':
        result = toCamelCase(inputString);
        break;
      case 'pascal':
        result = toPascalCase(inputString);
        break;
      case 'snake':
        result = toSnakeCase(inputString);
        break;
      case 'kebab':
        result = toKebabCase(inputString);
        break;
      case 'trim':
        result = trimString(inputString);
        break;
      default:
        result = inputString;
    }
    setTransformedString(result);
  };

  return (
    <div className="App">
      <h1>String Transformer</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter string here"
      />
      <div className="button-group">
        <button onClick={() => handleTransform('lower')}>Lower Case</button>
        <button onClick={() => handleTransform('upper')}>Upper Case</button>
        <button onClick={() => handleTransform('camel')}>Camel Case</button>
        <button onClick={() => handleTransform('pascal')}>Pascal Case</button>
        <button onClick={() => handleTransform('snake')}>Snake Case</button>
        <button onClick={() => handleTransform('kebab')}>Kebab Case</button>
        <button onClick={() => handleTransform('trim')}>Trim</button>
      </div>
      <div>
        <h2>Transformed String:</h2>
        <p>{transformedString}</p>
      </div>
    </div>
  );
}

export default App;
