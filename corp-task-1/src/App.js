import { createContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

import Header from "./shared/components/Header";
import { getIssuesRequest, moreIssuesRequest } from "./shared/network/githubRequest";

export const IssueStore = createContext();

const Width640pxDiv = styled.div`
width: 620px;
min-height: 620px;
margin: auto;
border: 1px solid;
border-radius: 10px;
`;

function App() {
  return (
    <div className="App">
      <Width640pxDiv>
        <Header />
        <IssueStore.Provider value={{}}>
          <RouterProvider router={router}></RouterProvider>
        </IssueStore.Provider>
      </Width640pxDiv>
    </div>
  );
}

export default App;