import React from "react";
import { Link } from "react-router-dom";

import ListItem from "../../shared/components/ListItem";
import { IssueStore } from "../../App";

const List = () => {
    const {issues, setIssues} = React.useContext(IssueStore);

    return (
        <div>
            {
                issues.map((ele, idx) => <Link to={'/detail/' + ele.number} key={idx}>
                    <ListItem number={ele.number} title={ele.title} user={ele.user} comments={ele.comments} created_at={ele.created_at} />
                </Link>)
            }
        </div>
    );
}

export default List;