import { Octokit } from "octokit";

const octokit = new Octokit({ 
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

let OWNER = "angular";
let REPO = "angular-cli";

async function getIssuesRequest(page) {
    let response = null;

    response = await octokit.request("GET /repos/{owner}/{repo}/issues?sort={sort}&page={page}", {
        owner: OWNER,
        repo: REPO,
        sort: "comments",
        page: page,
    });

    return response;
}

async function getAnIssue(issueNumber) {
    let response = null;

    response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: OWNER,
        repo: REPO,
        issue_number: issueNumber,
    });

    return response;
}

export { getIssuesRequest, getAnIssue };