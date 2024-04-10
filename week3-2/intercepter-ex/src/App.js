import React from 'react';
import instance from './network/axios';
import styled from 'styled-components';

// 우리가 스타일을 지정한 태그를 만든다
const OuterDiv = styled.div`
background: green;
width: 200px;
height: 200px;
`;

const InnerDiv = styled.div`
background: yellow;
width: 200px;
height: 200px;
border-radius: 999px;
`;

function App() {
  React.useEffect(() => {
    // instance.get('/users');

    // callApi();
  }, []);

  const callApi = async () => {
    try {
      // await instance.get("users");
      await instance.get("usersss");
    } catch (e) {
      console.log("에러 났어요!!: ", e);
    } finally {
      // 다시 한 번 뭔가를 하거나,
      // 에러가 났으니 후처리를 하자
      // catch에서의 후처리 중에 에러가 또 나타났더라도,
      // finally에는 무조건 들어오게 돼있어
      console.log("무조건 실행되는 finally");
    }
  }

  return (
    <div className="App">
      <OuterDiv>
        <InnerDiv>

        </InnerDiv>
      </OuterDiv>
    </div>
  );
}

export default App;
