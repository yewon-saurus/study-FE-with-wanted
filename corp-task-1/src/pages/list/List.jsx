import React from "react";

import ListItem from "../../shared/components/ListItem";
import { IssueStore } from "../../App";

const List = () => {
    const {issues, setIssues} = React.useContext(IssueStore);

    return (
        <div>
            {
                issues.map((ele, idx) => <ListItem key={idx}  index={idx} number={ele.number} title={ele.title} user={ele.user} comments={ele.comments} created_at={ele.created_at} />)
            }
        </div>
    );
}

export default List;