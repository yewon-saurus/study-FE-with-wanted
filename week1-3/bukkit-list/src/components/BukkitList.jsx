import { useSelector } from 'react-redux';
import BukkitItem from './BukkitItem';

const listStyle = {
    margin: "auto",
}

function BukkitList() {
    const bukkitData = useSelector((state) => state.bukkit.bukkit_list);

    return (
        <div style={listStyle}>
            {bukkitData.map((ele, idx) => <BukkitItem key={idx} id={ele.id} title={ele.title} done={ele.done} />)}
        </div>
    );
}

export default BukkitList;