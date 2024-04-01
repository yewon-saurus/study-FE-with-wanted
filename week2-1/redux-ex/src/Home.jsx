import { useDispatch } from "react-redux";
import { addCat } from "./redux/modules/cat";

const Home = () => {
    const dispatch = useDispatch();
    // console.log(dispatch);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {
                dispatch(addCat('고양이'));
            }}>고양이 추가하기</button>
        </div>
    );
}

export default Home;