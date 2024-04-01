import { useState } from "react";

const formStyle = {
    width: "300px",
    margin: "auto",
    marginTop: "1rem",
    padding: "1rem 2rem",
    border: "2px solid #dddddd",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "space-between",
}

const inputStyle = {
    width: "185px",
    padding: ".5rem",
}

const buttonStyle = {
    width: "85px",
}

function BukkitForm({bukkitData, setBukkitData}) {
    const [newBukkit, setNewBukkit] = useState('');

    function handleChangeInput(e) {
        setNewBukkit(e.target.value);
    }

    function handleButtonClick() {
        setBukkitData([...bukkitData, {
            "id": bukkitData[bukkitData.length - 1].id + 1,
            "title": newBukkit,
            "detail": "",
            "done": false,
        }])
        setNewBukkit('');
    }

    return (
        <div style={formStyle}>
            <input type="text" style={inputStyle} onChange={handleChangeInput} value={newBukkit} />
            <button style={buttonStyle} onClick={handleButtonClick}>추가하기</button>
        </div>
    );
}

export default BukkitForm;