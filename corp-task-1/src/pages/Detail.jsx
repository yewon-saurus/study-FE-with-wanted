import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

import { getAnIssue } from "../shared/network/githubRequest";
import ListItem from "../shared/components/ListItem";

const IssueTitleDiv = styled.div`
display: flex;
align-items: center;

img {
    height: 50px;
    margin: 0 0 0 1em;
    float: inline-start;
}
`;

const Detail = () => {
    const params = useParams();
    
    const [issue, setIssue] = React.useState({
        number: "",
        title: "",
        user: {},
        comments: 0,
        created_at: "",
    });

    React.useEffect(() => {
        getAnIssue(params.num).then(response => {
            if (response.status === 200) {
                setIssue(response.data);
            }
        });
    }, []);

    return (
        <div>
            <IssueTitleDiv>
                <img src={issue.user.avatar_url} />
                <ListItem number={issue.number} title={issue.title} user={issue.user} comments={issue.comments} created_at={issue.created_at} />
            </IssueTitleDiv>
            <MDEditor.Markdown
                style={{
                    margin: "1em",
                    padding: "1em",
                }}
                source={issue.body}
            />
        </div>
    );
}

export default Detail;