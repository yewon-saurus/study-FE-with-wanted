import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBukkitItem, modifyBukkitItemDone } from '../redux/modules/bukkit';

const bukkitItemStyle = {
    padding: "1rem",
    margin: "0.5rem",
    backgroundColor: "#eeeeee",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "space-between",
}

function Detail() {
    const params = useParams();
    const nav = useNavigate();

    const bukkitDetailData = useSelector((state) => state.bukkit.bukkit_list.find((ele) => ele.id === parseInt(params.id)));
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => nav(-1)}>뒤로가기</button>
            {/* <BukkitItem id={bukkitDetailData.id} title={bukkitDetailData.title} done={bukkitDetailData.done} /> */}
            <div style={bukkitItemStyle}>
                <div>
                    {bukkitDetailData.title}
                </div>
                <div style={{display: 'flex'}}>
                    <div onClick={() => {
                        dispatch(modifyBukkitItemDone(bukkitDetailData.id, bukkitDetailData.done));
                    }} style={{cursor: "pointer"}}>
                        {bukkitDetailData.done ? '✅' : '🔲'}
                    </div>
                    <div onClick={() => {
                        nav(-1);
                        setTimeout(() => {
                            dispatch(deleteBukkitItem(bukkitDetailData.id));
                        }, 10);
                    }}
                    style={{marginLeft: ".5rem", cursor: "pointer"}}>
                        ❌
                    </div>
                </div>
            </div>
            <div>
                <p>{bukkitDetailData.detail}</p>
            </div>
        </div>
    );
}

export default Detail;