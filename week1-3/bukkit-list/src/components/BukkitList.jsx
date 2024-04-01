import BukkitItem from './BukkitItem';

const listStyle = {
    margin: "auto",
}

function BukkitList({bukkitData}) {
    return (
        <div style={listStyle}>
            {bukkitData.map((ele, idx) => <BukkitItem key={idx} id={ele.id} title={ele.title} detail={ele.detail} done={ele.done} />)}
        </div>
    );
}

export default BukkitList;