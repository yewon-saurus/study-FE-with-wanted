import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();

    return (
        <div>
            디테일 페이지 {params.num}
        </div>
    );
}

export default Detail;