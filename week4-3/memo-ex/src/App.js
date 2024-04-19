import React from 'react';

const MemoComponent = ({a, b, c}) => {
  const add = (x, y, z) => {
    console.log('add 함수 호출!');
    return x + y + z;
  }

  const memorizedValue = React.useMemo(() => add(a, b, c), [a, b]); // a, b의 값이 변했을 때, memorizing을 해

  return (
    <div>
      <h1>메모 컴포넌트</h1>
      <p>숫자: {a}, {b}, {c}</p>
      <p>더한 값: {memorizedValue}</p>
    </div>
  );
}

function App() {
  const [numbers, setNumbers] = React.useState({
    a: 0,
    b: 1,
    c: 2,
  });

  return (
    <div className="App">
      <MemoComponent a={numbers.a} b={numbers.b} c={numbers.c} />
      <button onClick={() => {
        setNumbers({...numbers, a: numbers.a + 1, b: numbers.b + 1});
      }}>a, b를 변경해요</button>
      <button onClick={() => {
        setNumbers({...numbers, c: numbers.c + 1});
      }}>c를 변경해요</button>
    </div>
  );
}

export default App;
