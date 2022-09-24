import React from 'react';
import HelloWord from 'Components/HelloWord';
import Helper from 'Helper';
import image from './assets/manzara.jpg';

function App() {
  Helper.deneme();
  return (
    <div>
      Merhaba
      <img src={image} alt='test' />
      <HelloWord />
    </div>
  );
}

export default App;
