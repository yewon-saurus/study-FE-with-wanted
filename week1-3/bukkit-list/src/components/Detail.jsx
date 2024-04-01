import { useParams } from "react-router-dom";

function Detail() {
    const params = useParams();

    return (
        <div>
            {params.id}번 항목 상세페이지
        </div>
    );
}

export default Detail;