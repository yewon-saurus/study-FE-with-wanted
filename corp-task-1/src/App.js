import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

import Header from "./shared/components/Header";
import { getIssuesRequest, moreIssuesRequest } from "./shared/network/githubRequest";

const dummyData = [
  {
      "number": 16980,
      "title": "Yarn PnP Support Status",
      "user": {
          "login": "clydin",
          "id": 19598772,
          "node_id": "MDQ6VXNlcjE5NTk4Nzcy",
          "avatar_url": "https://avatars.githubusercontent.com/u/19598772?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/clydin",
          "html_url": "https://github.com/clydin",
          "followers_url": "https://api.github.com/users/clydin/followers",
          "following_url": "https://api.github.com/users/clydin/following{/other_user}",
          "gists_url": "https://api.github.com/users/clydin/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/clydin/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/clydin/subscriptions",
          "organizations_url": "https://api.github.com/users/clydin/orgs",
          "repos_url": "https://api.github.com/users/clydin/repos",
          "events_url": "https://api.github.com/users/clydin/events{/privacy}",
          "received_events_url": "https://api.github.com/users/clydin/received_events",
          "type": "User",
          "site_admin": false
      },
      "comments": 147,
      "created_at": "2020-02-14T20:55:54Z",
  },
  {
      "number": 4318,
      "title": "Request: Method to pass environment variables during build vs file.",
      "user": {
          "login": "DennisSmolek",
          "id": 1397052,
          "node_id": "MDQ6VXNlcjEzOTcwNTI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1397052?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/DennisSmolek",
          "html_url": "https://github.com/DennisSmolek",
          "followers_url": "https://api.github.com/users/DennisSmolek/followers",
          "following_url": "https://api.github.com/users/DennisSmolek/following{/other_user}",
          "gists_url": "https://api.github.com/users/DennisSmolek/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/DennisSmolek/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/DennisSmolek/subscriptions",
          "organizations_url": "https://api.github.com/users/DennisSmolek/orgs",
          "repos_url": "https://api.github.com/users/DennisSmolek/repos",
          "events_url": "https://api.github.com/users/DennisSmolek/events{/privacy}",
          "received_events_url": "https://api.github.com/users/DennisSmolek/received_events",
          "type": "User",
          "site_admin": false
      },
      "comments": 127,
      "created_at": "2017-02-01T14:53:35Z",
  },
  {
      "number": 26323,
      "title": "Providing a DI token in commonEngine.render() does not provide its value to application",
      "user": {
          "login": "Ozzcer",
          "id": 52703341,
          "node_id": "MDQ6VXNlcjUyNzAzMzQx",
          "avatar_url": "https://avatars.githubusercontent.com/u/52703341?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ozzcer",
          "html_url": "https://github.com/Ozzcer",
          "followers_url": "https://api.github.com/users/Ozzcer/followers",
          "following_url": "https://api.github.com/users/Ozzcer/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ozzcer/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ozzcer/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ozzcer/subscriptions",
          "organizations_url": "https://api.github.com/users/Ozzcer/orgs",
          "repos_url": "https://api.github.com/users/Ozzcer/repos",
          "events_url": "https://api.github.com/users/Ozzcer/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ozzcer/received_events",
          "type": "User",
          "site_admin": false
      },
      "comments": 86,
      "created_at": "2023-11-10T13:04:31Z",
  }
];

export const IssueStore = React.createContext();

const Width640pxDiv = styled.div`
width: 620px;
min-height: 620px;
margin: auto;
border: 1px solid;
border-radius: 10px;
`;

function App() {
  const [issues, setIssues] = React.useState(dummyData);

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