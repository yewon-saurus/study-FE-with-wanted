import styled from "styled-components";

const ListItemDiv = styled.div`
display: grid;
grid-template-columns: 10fr 2fr;
border-bottom: 2px solid #dddddd;
margin: 0 1em;
padding: 1em;
width: auto;

.text-sm {
    font-size: 0.75em;
}

.comments {
    display: flex;
    justify-content: end;
    align-items: center;
}
`;

const ListItem = (props) => {
    let created_at_date = props.created_at.slice(0, 4) + '년 '
        + parseInt(props.created_at.slice(5, 7)) + '월 '
        + parseInt(props.created_at.slice(8, 10)) + '일';

    return (
        <ListItemDiv>
            <div>
                <div>
                    {'#' + props.number + ' ' + props.title}
                </div>
                <div className="text-sm">
                    {'작성자: ' + props.user.login + ', 작성일: ' + created_at_date}
                </div>
            </div>
            <div className="text-sm comments">
                {'코멘트: ' + props.comments}
            </div>
        </ListItemDiv>
    );
}

export default ListItem;