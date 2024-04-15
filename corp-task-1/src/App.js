import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

import Header from "./shared/components/Header";
import IssueStore from "./shared/store/store";
import { getIssuesRequest } from "./shared/network/githubRequest";

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
  const [issues, setIssues] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  useEffect(() => {
    getIssuesRequest(currentPage).then(response => {
      setIssues(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Width640pxDiv>
        <Header />
        <IssueStore.Provider value={{issues, setIssues, currentPage, setCurrentPage}}>
          <RouterProvider router={router}></RouterProvider>
        </IssueStore.Provider>
      </Width640pxDiv>
    </div>
  );
}

export default App;