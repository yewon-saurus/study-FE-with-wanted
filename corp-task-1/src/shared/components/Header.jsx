import styled from "styled-components";

const HeaderOuterDiv = styled.div`
text-align: center;
padding: 12px;
font-size: 20px;
border-bottom: 1px solid #eeeeee;

a {
    text-decoration: none;
}
`;

const Header = () => {
    return (
        <HeaderOuterDiv>
            <span>
                <a href="https://github.com/angular">
                    Angular
                </a>
            </span>
            {' / '}
            <span>
                <a href="https://github.com/angular/angular-cli">
                    Angular-cli
                </a>
            </span>
        </HeaderOuterDiv>
    );
}

export default Header;