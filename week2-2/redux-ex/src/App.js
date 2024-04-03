import React from 'react';
import { Cat, Dog, Home } from './Component';

// redux는 hook을 제공합니다
// 데이터를 편하게 갖다 쓰고 편하게 변경 요청 보내라고 hook을 제공하는 건데요
// 갖다쓰는 애가 useSelector
// 변경 요청을 보내는 애가 useDispatch

import { useSelector, useDispatch } from 'react-redux';

import { addCat } from './redux/modules/cat';

function App() {
  const [a, setA] = React.useState(0);

  // 어떤 함수가 들어가야 하냐면, state 중 뭐를 가져올 건지 정해주는 친구가 필요하다
  const myStoreData = useSelector((state) => state);

  const dispatch = useDispatch(addCat);

  console.log(myStoreData);

  return (
    <div className="App">
      {a}
      {/* <button onClick={() => {setA(a + 1)}}>바뀌어라</button> */}
      <button onClick={() => {
        dispatch(
          {
            type: "cat/ADD", cat: "고양이2"
          }
        );
      }}>고양이</button>

      <Home a={a} setA={setA}  />
      <Cat a={a} />
      <Dog />
    </div>
  );
}

export default App;
