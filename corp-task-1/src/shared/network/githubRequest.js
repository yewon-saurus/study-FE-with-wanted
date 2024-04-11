import { Octokit } from "octokit";

const octokit = new Octokit({ 
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

async function getIssuesRequest() {
    let response = null;

    response = await octokit.request("GET /repos/{owner}/{repo}/issues?sort={sort}&per_page={per_page}", {
        owner: "angular",
        repo: "angular-cli",
        sort: "comments",
        per_page: 10,
    });

    return response;
}

async function moreIssuesRequest() {
    let response = null;

    return response;
}

export { getIssuesRequest, moreIssuesRequest };