import styled from 'styled-components';

const AdItemDiv = styled.div`
border-bottom: 2px solid #dddddd;
margin: 0 1em;
padding: 1em;
width: auto;

img {
    width: 100%;
}
`;

const AdItem = () => {
    return (
        <AdItemDiv>
            <a href='https://www.wanted.co.kr/' target="_blank">
                <img src='https://efficient-xylophone-730.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1bee5da4-77bf-44b1-ac2e-63189f3e8f3e%2Fc5070070-adde-4ae8-9f40-c7dff1fa8610%2FIMG_2126.jpg?table=block&id=44a500d0-9e21-4ae2-af23-f918b14bbd98&spaceId=1bee5da4-77bf-44b1-ac2e-63189f3e8f3e&width=1250&userId=&cache=v2' />
            </a>
        </AdItemDiv>
    );
}

export default AdItem;