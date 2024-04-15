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
                setIssues([...issues, ...response.data]);
                setCurrentPage(nextPage);
            });
        }
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0,
        });

        if (detectBottomTarget.current) {
            // 해당 ref가 현재 유효한 DOM 요소를 가리키는지 확인!
            // (유효하지 않은 요소에 접근하려고 시도하는 것을 방지)
            // 안 해도 잘 실행되긴 하던데, 이렇게 확인해 주는 것이 좋은 습관이라고 합니다
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