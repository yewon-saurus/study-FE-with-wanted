import React from 'react';

import Cat from './components/Cat';
import Dog from './components/Dog';
import './App.css';

import MyStore from './store/store';

function App() {
  const [name, setName] = React.useState('고양이');

  return (
    <div className="App">
      <MyStore.Provider value={{name, setName}}>
        <Cat />
        <Dog />
      </MyStore.Provider>
    </div>
  );
}

export default App;
