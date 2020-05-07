import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <h1>APP</h1>
    {
        [1, 2, 3].map((i, idx) => (
          <div key={`item-${idx}`}>{i}</div>
        ))
    }
  </div>
);

render(<App />, document.querySelector('#app'));