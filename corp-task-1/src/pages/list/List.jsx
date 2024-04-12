import React, { useEffect } from "react";

import ListItem from "../../shared/components/ListItem";
import { IssueStore } from "../../App";
import { getIssuesRequest } from "../../shared/network/githubRequest";

const List = () => {
    const {issues, setIssues, currentPage, setCurrentPage} = React.useContext(IssueStore);

    const detectBottomTarget = React.useRef(null);
    
    const handleObserver = (entities) => {
        const target = entities[0];
        const nextPage = currentPage + 1;
        if (target.isIntersecting) {
            getIssuesRequest(nextPage).then(response => {
                if ([...issues, ...response.data] != issues) {
                    setIssues([...issues, ...response.data]);
                    setCurrentPage(nextPage);
                }
            });
        }
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0,
        });

        if (detectBottomTarget.current) {
            observer.observe(detectBottomTarget.current);
        }

        return () => {
            if (detectBottomTarget.current) {
                observer.unobserve(detectBottomTarget.current);
            }
        }
    }, [currentPage]);

    return (
        <div>
            <div>
                {
                    issues.map((ele, idx) => <ListItem key={idx} index={idx} number={ele.number} title={ele.title} user={ele.user} comments={ele.comments} created_at={ele.created_at} />)
                }
            </div>
            <div ref={detectBottomTarget}></div>
        </div>
    );
}

export default List;