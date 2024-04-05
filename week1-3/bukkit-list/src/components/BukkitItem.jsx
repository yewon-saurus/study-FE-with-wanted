import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBukkitItem, modifyBukkitItemDone } from '../redux/modules/bukkit';

const bukkitItemStyle = {
    padding: "1rem",
    margin: "0.5rem",
    backgroundColor: "#eeeeee",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "space-between",
}

const linkStyle = {
    textDecoration: "none",
    color: "#000000",
}

function BukkitItem({id, title, done}) {
    const dispatch = useDispatch();

    return (
        <div style={bukkitItemStyle}>
            <Link Link to={'/detail/' + id} style={linkStyle}>
                {title}
            </Link>
            <div style={{display: 'flex'}}>
                <div onClick={() => {
                    dispatch(modifyBukkitItemDone(id, done));
                }} style={{cursor: "pointer"}}>
                    {done ? '✅' : '🔲'}
                </div>
                <div onClick={() => {
                    dispatch(deleteBukkitItem(id));
                }}
                style={{marginLeft: ".5rem", cursor: "pointer"}}>
                    ❌
                </div>
            </div>
        </div>
    );
}

export default BukkitItem;