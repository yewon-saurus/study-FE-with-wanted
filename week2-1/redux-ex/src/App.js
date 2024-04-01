import './App.css';

import { useState, createContext, useContext } from 'react';

// 상태 저장소 만들어 볼게요
const MyStore = createContext();

const ChildComponent = (props) => {
  const {name, setName} = useContext(MyStore);

  console.log(name, setName);
  return (
    <div>
      {name}
      <button onClick={() => {
        setName('yewon2')
      }}>바꾸기</button>
    </div>
  );
}

function App() {
  const [name, setName] = useState('yewon');
  // const {name, setName} = useContext(MyStore);

  return (
    <MyStore.Provider value={{name, setName}}>
      <ChildComponent />
    </MyStore.Provider>
  );
}

export default App;
