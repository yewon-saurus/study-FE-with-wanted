import React from 'react';
import MyStore from "../store/store";

const Dog = () => {
    const {setName} = React.useContext(MyStore);

    return (
        <div>
            <button onClick={() => {
                setName('강아지');
            }}>이름 변경 '강아지'</button>
        </div>
    );
}

export default Dog;