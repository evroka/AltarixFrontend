import React from 'react';
import HeaderChat from './components/Top.js';
import Content from './components/Content.js';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
    return (
      <div className='container'>
        <HeaderChat />
        <Content />
      </div>
    );
  }

  export default App;