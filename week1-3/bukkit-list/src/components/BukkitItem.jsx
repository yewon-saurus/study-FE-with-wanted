import { Link } from 'react-router-dom';

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

function BukkitItem({id, title, detail, done}) {
    return (
        <Link to={'/detail/' + id} style={linkStyle}>
            <div style={bukkitItemStyle}>
                <div>
                    {title}
                </div>
                <div>
                    {done ? '✅' : '🔲'}
                </div>
            </div>
        </Link>
    );
}

export default BukkitItem;