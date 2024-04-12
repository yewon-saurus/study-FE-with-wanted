import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

import Header from "./shared/components/Header";
import { getIssuesRequest, moreIssuesRequest } from "./shared/network/githubRequest";

export const IssueStore = React.createContext();

const Width640pxDiv = styled.div`
width: 640px;
min-height: 620px;
margin: auto;
border: 1px solid;

@media (max-width: 640px) {
  width: 100%;
}
`;

function App() {
  const [issues, setIssues] = React.useState([
    {
      "number": "",
        "title": "",
        "user": {
            "login": "",
        },
        "comments": "",
        "created_at": "",
    }
  ]);

  useEffect(() => {
    getIssuesRequest().then(response => {
      setIssues(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Width640pxDiv>
        <Header />
        <IssueStore.Provider value={{issues, setIssues}}>
          <RouterProvider router={router}></RouterProvider>
        </IssueStore.Provider>
      </Width640pxDiv>
    </div>
  );
}

export default App;