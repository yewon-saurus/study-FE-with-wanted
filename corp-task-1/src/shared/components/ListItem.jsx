import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItemDiv = styled.div`
display: grid;
grid-template-columns: 7fr 1fr;
border-bottom: 2px solid #dddddd;
margin: 1em;
padding: 1em;

.text-sm {
    font-size: 0.75em;
}
`;

const ListItem = (props) => {
    let created_at_date = props.created_at.slice(0, 4) + '년 '
        + parseInt(props.created_at.slice(5, 7)) + '월 '
        + parseInt(props.created_at.slice(8, 10)) + '일';

    return (
        <Link to={'/detail/' + props.number}>
            <ListItemDiv>
                <div>
                    <div>
                        {'#' + props.number + ' ' + props.title}
                    </div>
                    <div className="text-sm">
                        {'작성자: ' + props.user.login + ', 작성일: ' + created_at_date}
                    </div>
                </div>
                <div className="text-sm">
                    {'코멘트: ' + props.comments}
                </div>
            </ListItemDiv>
        </Link>
    );
}

export default ListItem;