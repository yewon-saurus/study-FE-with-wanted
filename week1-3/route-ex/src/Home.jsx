import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            Home 이에요
            <div>
                <Link to='/cat'>고양이 화면으로 가기</Link>
            </div>
        </div>
    );
}

export default Home;